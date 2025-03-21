import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
  Animated,
} from 'react-native';
import { Button, Card, RadioButton, IconButton } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import { cvTemplates } from '../utils/cvTemplates';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getRemainingDays, hasValidLicense } from '../utils/licenseUtils';
import { generateWatermark } from '../utils/cvTemplates';
import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const { classic: classicTemplates, canadian: canadianTemplates } = cvTemplates;

const CreateCVScreen = ({ route }) => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(1)).current;
    const [cvType, setCvType] = useState('classic');
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [cvContent, setCvContent] = useState('');
    const [isEnglish, setIsEnglish] = useState(false);
    const [zoom, setZoom] = useState(0.5);
    const [hasLicense, setHasLicense] = useState(false);

    const userData = route.params?.userData || {
        firstName: 'John',
        lastName: 'Doe',
        title: 'Software Engineer',
        email: 'john.doe@example.com',
        phone: '123-456-7890',
        address: '123 Main St',
        dateOfBirth: '01/01/1990',
        linkedin: 'linkedin.com/in/johndoe',
        portfolio: 'johndoe.com',
        profile: 'Experienced software engineer with a passion for building innovative applications.',
        nationality: 'American',
        maritalStatus: 'Single',
        drivingLicense: 'B',
        photo: null,
    };

    useFocusEffect(
        React.useCallback(() => {
            const checkLicense = async () => {
                const remainingDays = await getRemainingDays();
                setHasLicense(remainingDays > 0);
            };
            checkLicense();
            
            return () => {};
        }, [])
    );

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start();

        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.05,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    const getTemplatesForTypeAndLanguage = () => {
        const language = isEnglish ? 'EN' : 'FR';
        return cvType === 'classic' ? classicTemplates : canadianTemplates;
    };

    const availableTemplates = getTemplatesForTypeAndLanguage().filter(template => {
        const languageCode = isEnglish ? 'EN' : 'FR';
        return template.name.includes(languageCode);
    });

    useEffect(() => {
        const language = isEnglish ? 'EN' : 'FR';
        if (cvType === 'classic' && language === 'FR' && !selectedTemplate) {
            setSelectedTemplate(
                availableTemplates.find(template => template.name === "Modèle Classique 1 FR") ||
                availableTemplates[0] ||
                null
            );
        } else if (cvType === 'classic' && language === 'EN' && !selectedTemplate) {
            setSelectedTemplate(
                availableTemplates.find(template => template.name === "Modèle Classique 1 EN") ||
                availableTemplates[0] ||
                null
            );
        }
    }, [cvType, isEnglish, availableTemplates]);

    const generateCV = () => {
        if (!selectedTemplate) {
            Alert.alert('Erreur', 'Veuillez sélectionner un modèle.');
            return '';
        }
        try {
            return selectedTemplate.template(userData);
        } catch (error) {
            console.error('Erreur lors de la génération du CV :', error);
            Alert.alert('Erreur', `Échec de la génération du CV : ${error.message}`);
            return '';
        }
    };

    useEffect(() => {
        if (selectedTemplate) {
            const html = generateCV();
            setCvContent(html);
        }
    }, [selectedTemplate, userData, isEnglish]);

    const toggleLanguage = () => {
        setIsEnglish(prevIsEnglish => {
            const newIsEnglish = !prevIsEnglish;
            const languageCode = newIsEnglish ? 'EN' : 'FR';
            const updatedAvailableTemplates = getTemplatesForTypeAndLanguage().filter(template =>
                template.name.includes(languageCode)
            );
            if (cvType === 'classic') {
                const newTemplate = updatedAvailableTemplates.find(template =>
                    template.name === `Modèle Classique 1 ${languageCode}`
                );
                setSelectedTemplate(newTemplate || updatedAvailableTemplates[0] || null);
            }
            return newIsEnglish;
        });
    };

    const handleZoomIn = () => {
        setZoom(prevZoom => Math.min(prevZoom + 0.05, 1));
    };

    const handleZoomOut = () => {
        setZoom(prevZoom => Math.max(prevZoom - 0.05, 0.1));
    };

    const handleResetZoom = () => {
        setZoom(0.5);
    };

    const generatePdf = async (htmlContent, isTrial) => {
        try {
            let finalHtmlContent = htmlContent;
            if (isTrial) {
                finalHtmlContent = generateWatermark(htmlContent);
            }
            const { uri } = await Print.printToFileAsync({ html: finalHtmlContent });
            const isAvailable = Sharing.isAvailableAsync();
            if (isAvailable) {
                const filename = `CV_${userData.lastName}.pdf`;
                await Sharing.shareAsync(uri, { mimeType: 'application/pdf', dialogTitle: 'Partager votre CV', filename });
            } else {
                Alert.alert('PDF généré', `Votre CV a été enregistré ici : ${uri}`);
            }
        } catch (error) {
            console.error('Erreur lors de la génération du PDF :', error);
            Alert.alert(
                'Erreur',
                `Une erreur est survenue lors de la génération du PDF : ${error.message}. Veuillez vérifier que l'application a les permissions nécessaires pour accéder au stockage.`
            );
        }
    };

    const downloadCV = async (isTrial = true) => {
        const htmlContent = generateCV();
        if (!htmlContent) return;

        if (!isTrial && !hasLicense) {
            Alert.alert(
                'Version d\'essai',
                'Activez votre licence pour télécharger la version complète sans filigrane.',
                [
                    { text: 'Continuer en version d\'essai', onPress: () => generatePdf(htmlContent, true) },
                    { text: 'Activer la licence', onPress: () => navigation.navigate('Licence') }
                ]
            );
            return;
        }

        try {
            await generatePdf(htmlContent, isTrial);
            Alert.alert(
                'Succès',
                isTrial ? 'CV téléchargé en version d\'essai' : 'CV téléchargé en version complète',
                [{ text: 'OK' }]
            );
        } catch (error) {
            Alert.alert(
                'Erreur',
                'Une erreur est survenue lors de la génération du PDF. Veuillez réessayer.',
                [{ text: 'OK' }]
            );
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Section : Type de CV */}
            <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
                <Card style={styles.card}>
                    <Text style={styles.subtitle}>Type de CV</Text>
                    <RadioButton.Group onValueChange={value => setCvType(value)} value={cvType}>
                        <View style={styles.radioGroup}>
                            <RadioButton.Item
                                label="Classique"
                                value="classic"
                                style={styles.radioButtonItem}
                                labelStyle={[styles.radioButtonLabel, { color: '#007bff' }]}
                            />
                            <RadioButton.Item
                                label="Canadien"
                                value="canadian"
                                style={styles.radioButtonItem}
                                labelStyle={[styles.radioButtonLabel, { color: '#28a745' }]}
                            />
                        </View>
                    </RadioButton.Group>
                </Card>
            </Animated.View>

            {/* Section : Modèles Disponibles */}
            {availableTemplates.length > 0 && (
                <Animated.View style={[styles.section, { transform: [{ scale: scaleAnim }] }]}>
                    <Card style={styles.card}>
                        <Text style={styles.subtitle}>Modèles Disponibles</Text>
                        <View style={styles.templateGrid}>
                            {availableTemplates.map((template, index) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setSelectedTemplate(template)}
                                    style={styles.templateNameContainer}
                                >
                                    <Animated.Text
                                        style={[
                                            styles.templateName,
                                            selectedTemplate === template && styles.selectedTemplateName,
                                        ]}
                                    >
                                        {template.name}
                                    </Animated.Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </Card>
                </Animated.View>
            )}

            {/* Section : Aperçu du CV */}
            {selectedTemplate && (
                <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
                    <Card style={styles.card}>
                        <Text style={styles.subtitle}>Aperçu du CV</Text>
                        <View style={styles.zoomControls}>
                            <IconButton
                                icon="minus"
                                size={24}
                                onPress={handleZoomOut}
                                disabled={zoom <= 0.1}
                                style={styles.zoomButton}
                            />
                            <IconButton
                                icon="refresh"
                                size={24}
                                onPress={handleResetZoom}
                                style={styles.zoomButton}
                            />
                            <IconButton
                                icon="plus"
                                size={24}
                                onPress={handleZoomIn}
                                disabled={zoom >= 1}
                                style={styles.zoomButton}
                            />
                        </View>
                        <WebView
                            source={{ html: cvContent }}
                            style={[styles.webview, { transform: [{ scale: zoom }] }]}
                            scalesPageToFit={true}
                        />
                    </Card>
                </Animated.View>
            )}

            {/* Boutons : Télécharger version activée/essai */}
            <View style={styles.section}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => downloadCV(true)}
                >
                    <Text style={styles.buttonText}>Télécharger Version d'Essai</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, !hasLicense && styles.disabledButton]}
                    onPress={() => downloadCV(false)}
                    disabled={!hasLicense}
                >
                    <Text style={styles.buttonText}>Télécharger Version Complète</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        backgroundColor: '#f0f8ff',
    },
    section: {
        marginBottom: 20,
    },
    card: {
        padding: 15,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#a6b1e1',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007bff',
        textAlign: 'center',
        marginBottom: 15,
    },
    radioGroup: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: '#e6f7ff',
        paddingVertical: 10,
        borderRadius: 25,
        paddingHorizontal: 20,
    },
    radioButtonItem: {
        backgroundColor: 'transparent',
        borderRadius: 25,
        marginHorizontal: 10,
        paddingHorizontal: 15,
    },
    radioButtonLabel: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    templateGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    templateNameContainer: {
        width: '46%',
        marginBottom: 20,
        alignItems: 'center',
    },
    templateName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#f8f9fa',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    selectedTemplateName: {
        borderColor: '#ffa500',
        borderWidth: 2,
        backgroundColor: '#fff3cd',
        shadowColor: '#ffa500',
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },
    zoomControls: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 8,
        padding: 5,
    },
    zoomButton: {
        margin: 0,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        elevation: 2,
    },
    webview: {
        height: 600,
        marginTop: 10,
        marginBottom: 50,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        borderColor: '#b0e0e6',
        borderWidth: 1,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#007bff',
        borderRadius: 30,
        paddingVertical: 15,
        elevation: 5,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    disabledButton: {
        backgroundColor: '#cccccc',
    },
});

export default CreateCVScreen;
