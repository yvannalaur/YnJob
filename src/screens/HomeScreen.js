import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  Animated,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Easing,
} from 'react-native';
import AnimatedTriangles from '../components/AnimatedTriangles';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Animatable from 'react-native-animatable';
import logo from '../../assets/logo.png';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { SharedElement } from 'react-navigation-shared-element';

const { width } = Dimensions.get('window');
const itemWidth = width * 0.7; // Largeur des prévisualisations des modèles de CV

const HomeScreen = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scrollX = useRef(new Animated.Value(0)).current; // Animation pour le défilement
  const logoAnim = useRef(new Animated.Value(0)).current;

  // Référence pour la FlatList des modèles de CV
  const cvListRef = useRef(null);

  // Animations pour chaque section
  const sectionAnimations = [
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
    useRef(new Animated.Value(0)).current,
  ];

  useEffect(() => {
    // Animation d'apparition progressive du logo avec rebond
    Animated.spring(fadeAnim, {
      toValue: 1,
      friction: 8,
      tension: 40,
      useNativeDriver: true,
    }).start();

    // Animation de respiration et rotation pour le logo
    Animated.loop(
      Animated.sequence([
        Animated.timing(logoAnim, {
          toValue: 1,
          duration: 2000,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          useNativeDriver: true,
        }),
        Animated.timing(logoAnim, {
          toValue: 0,
          duration: 2000,
          easing: Easing.bezier(0.25, 0.1, 0.25, 1),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // Données des modèles de CV (sans les titres)
  const cvPreviews = [
    { id: '1', image: require('../../assets/cv_template_1.png') },
    { id: '2', image: require('../../assets/cv_template_2.png') },
    { id: '3', image: require('../../assets/cv_template_3.png') },
    { id: '4', image: require('../../assets/cv_template_4.png') },
    { id: '5', image: require('../../assets/cv_template_5.png') },
  ];

  // Rendu des modèles de CV avec animation de défilement
  const renderItem = ({ item, index }) => {
    const inputRange = [
      (index - 1) * itemWidth,
      index * itemWidth,
      (index + 1) * itemWidth,
    ];
    const scale = scrollX.interpolate({
      inputRange,
      outputRange: [0.8, 1, 0.8],
      extrapolate: 'clamp',
    });

    const opacity = scrollX.interpolate({
      inputRange,
      outputRange: [0.5, 1, 0.5],
      extrapolate: 'clamp',
    });

    return (
      <Animated.View style={[styles.previewItem, { opacity }]}>
        <Animated.Image
          source={item.image}
          style={[
            styles.previewImage,
            { transform: [{ scale }] },
          ]}
          resizeMode="contain"
        />
      </Animated.View>
    );
  };

  // Défilement continu des modèles de CV
  useEffect(() => {
    let offset = 0;
    const intervalId = setInterval(() => {
      offset += itemWidth;
      if (offset >= cvPreviews.length * itemWidth) {
        offset = 0; // Recommence au début
      }
      if (cvListRef.current) {
        cvListRef.current.scrollToOffset({ offset, animated: true });
      }
    }, 3000); // Change tous les 3 secondes

    return () => clearInterval(intervalId);
  }, [cvPreviews]);

  // Animation d'apparition des sections lors du défilement
  useEffect(() => {
    const animations = sectionAnimations.map((anim, index) => {
      return Animated.timing(anim, {
        toValue: 1,
        duration: 1000,
        delay: index * 200, // Délai progressif pour un effet séquentiel
        useNativeDriver: true,
      });
    });

    const sequence = Animated.stagger(200, animations); // Démarre les animations en cascade
    sequence.start();
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AnimatedTriangles />
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header amélioré avec animation et dégradé */}
        <LinearGradient
          colors={['#1a2980', '#26d0ce', '#2980b9', '#81ecec']}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <BlurView intensity={20} style={styles.blurContainer}>
            <Animatable.View animation="zoomIn" duration={1800} iterationCount={1}>
              <Animated.Image
                source={logo}
                style={[
                  styles.logo,
                  {
                    transform: [
                      {
                        scale: logoAnim.interpolate({
                          inputRange: [0, 0.5, 1],
                          outputRange: [1.8, 2.2, 2.4],
                        }),
                      },
                      {
                        rotate: logoAnim.interpolate({
                          inputRange: [0, 0.5, 1],
                          outputRange: ['-3deg', '0deg', '3deg'],
                        })
                      },
                      {
                        translateY: logoAnim.interpolate({
                          inputRange: [0, 0.5, 1],
                          outputRange: [0, -10, 0],
                        })
                      }
                    ],
                  },
                ]}
                resizeMode="contain"
              />
            </Animatable.View>
            
            <Animatable.View animation="fadeInUp" delay={300} duration={1200}>
              <Animated.Text 
                style={[
                  styles.welcomeText, 
                  { 
                    opacity: fadeAnim,
                    transform: [{
                      translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0]
                      })
                    }] 
                  }
                ]}
              >
                Bienvenue sur YnJob
              </Animated.Text>
              <Animatable.Text 
                animation="fadeIn" 
                delay={800} 
                style={styles.welcomeSubtitle}
              >
                <Animatable.Text animation="pulse" iterationCount="infinite" iterationDelay={3000}>
                  ✨
                </Animatable.Text> Votre partenaire pour un CV de qualité <Animatable.Text animation="pulse" iterationCount="infinite" iterationDelay={3000}>
                  ✨
                </Animatable.Text>
              </Animatable.Text>
            </Animatable.View>
          </BlurView>
        </LinearGradient>

      {/* Section : Description avec animation améliorée */}
      <Animatable.View animation="fadeInUp" delay={300} duration={1000} style={styles.section}>
        <LinearGradient
          colors={['#ffffff', '#e6f7ff', '#d0e8ff']}
          style={styles.card}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Animatable.View animation="pulse" iterationCount="infinite" iterationDelay={3000} duration={2000}>
            <Text style={styles.description}>
              <Text style={styles.highlightText}>Propulsez votre carrière</Text> avec nos modèles de CV adaptés à chaque besoin.
            </Text>
          </Animatable.View>
          
          <Animatable.View animation="fadeIn" delay={800} duration={1000}>
            <View style={styles.tagContainer}>
              {/* Tags supprimés comme demandé */}
            </View>
          </Animatable.View>
        </LinearGradient>
      </Animatable.View>

      {/* Section : Modèles de CV avec effet parallaxe */}
      <Animatable.View animation="fadeInUp" delay={500} duration={1000} style={styles.section}>
        <LinearGradient
          colors={['#f0f8ff', '#e6f7ff', '#cce7ff']}
          style={[styles.card, styles.cvCard]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Animatable.Text animation="fadeIn" style={styles.sectionTitle}>
            Nos Modèles de CV
          </Animatable.Text>
          
          <Animatable.View animation="fadeIn" delay={300}>
            <BlurView intensity={10} style={styles.carouselBlur}>
              <View style={styles.carouselContainer}>
                <FlatList
                  ref={cvListRef}
                  data={cvPreviews}
                  keyExtractor={(item) => item.id}
                  renderItem={renderItem}
                  horizontal
                  decelerationRate="fast"
                  snapToInterval={itemWidth}
                  snapToAlignment="center"
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.carouselContent}
                  onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false }
                  )}
                  scrollEventThrottle={16}
                />
              </View>
            </BlurView>
            
            <View style={styles.paginationContainer}>
              {cvPreviews.map((_, index) => {
                const inputRange = [
                  (index - 1) * itemWidth,
                  index * itemWidth,
                  (index + 1) * itemWidth,
                ];
                
                const dotWidth = scrollX.interpolate({
                  inputRange,
                  outputRange: [8, 20, 8],
                  extrapolate: 'clamp',
                });
                
                const opacity = scrollX.interpolate({
                  inputRange,
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: 'clamp',
                });
                
                const dotColor = scrollX.interpolate({
                  inputRange,
                  outputRange: ['#a0c4ff', '#007bff', '#a0c4ff'],
                  extrapolate: 'clamp',
                });
                
                return (
                  <Animated.View
                    key={index}
                    style={[styles.dot, { width: dotWidth, opacity, backgroundColor: dotColor }]}
                  />
                );
              })}
            </View>
          </Animatable.View>
        </LinearGradient>
      </Animatable.View>

      {/* Section : Pourquoi un CV professionnel est essentiel */}
      <Animated.View style={[styles.section, { opacity: sectionAnimations[2] }]}>
        <LinearGradient
          colors={['#ffffff', '#e6f7ff']}
          style={styles.card}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={styles.sectionTitle}>Pourquoi un CV de qualité est essentiel ?</Text>
          <View style={styles.iconTextContainer}>
            <Icon name="check-circle" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.sectionDescription}>
              Un CV bien rédigé et structuré est la clé pour décrocher un entretien d’embauche.
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Icon name="user" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.sectionDescription}>
              ✅ Professionnel – Présentation soignée et adaptée à votre secteur
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Icon name="file-alt" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.sectionDescription}>
              ✅ Personnalisé – Adapté à chaque offre d’emploi pour maximiser vos chances
            </Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Icon name="clock" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.sectionDescription}>
              ✅ À jour – Contenant vos dernières expériences et réalisations
            </Text>
          </View>
        </LinearGradient>
      </Animated.View>

      {/* Section : Comment ça marche */}
      <Animated.View style={[styles.section, { opacity: sectionAnimations[3] }]}>
        <LinearGradient
          colors={['#ffffff', '#e6f7ff']}
          style={styles.card}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View>
            <Text style={styles.sectionTitle}>Comment ça marche ?</Text>
            <View style={styles.iconTextContainer}>
            <Icon name="rocket" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.step}>1️⃣ Commencez</Text>
          </View>
          <Text style={styles.stepDescription}>
            Cliquez sur "Commencer maintenant" ou sur l’icône 👤 Mon compte pour créer votre profil.
          </Text>
          <View style={styles.iconTextContainer}>
            <Icon name="edit" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.step}>2️⃣ Remplissez vos informations personnelles</Text>
          </View>
          <Text style={styles.stepDescription}>
            Dans "Mon compte", renseignez vos informations (nom, expériences, compétences…) et cliquez sur 💾 Enregistrer.
          </Text>
          <View style={styles.iconTextContainer}>
            <Icon name="eye" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.step}>3️⃣ Aperçu instantané de votre CV</Text>
          </View>
          <Text style={styles.stepDescription}>
            Après l’enregistrement, vous serez redirigé vers la section "Modèles de CV".
          </Text>
          <View style={styles.iconTextContainer}>
            <Icon name="download" size={20} color="#007bff" style={styles.icon} />
            <Text style={styles.step}>4️⃣ Choisissez et téléchargez votre CV</Text>
          </View>
          <Text style={styles.stepDescription}>
            Sélectionnez le modèle de CV qui vous convient et téléchargez-le 📥 en un clic.
          </Text>
          </View>
        </LinearGradient>
      </Animated.View>

      {/* Bouton "Commencez" amélioré */}
      <Animatable.View animation="pulse" iterationCount="infinite" iterationDelay={1500} duration={2000}>
        <TouchableOpacity
          style={[
            styles.startButton,
            {
              transform: [
                {
                  scale: logoAnim.interpolate({
                    inputRange: [0, 0.5, 1],
                    outputRange: [1, 1.15, 1],
                  }),
                },
              ],
              backgroundColor: logoAnim.interpolate({
                inputRange: [0, 1],
                outputRange: ['#007bff', '#00aaff'],
              }),
            },
          ]}
          onPress={() => navigation.navigate('Compte')}
          activeOpacity={0.7}
        >
          <LinearGradient
            colors={['#4776E6', '#8E54E9', '#00d2ff']}
            style={styles.buttonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Text style={styles.startButtonText}>Commencez maintenant</Text>
            <Icon name="arrow-right" size={16} color="#fff" style={styles.buttonIcon} />
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>

      {/* Pied de page amélioré */}
      <LinearGradient
        colors={['#1a2980', '#26d0ce', '#2980b9']} // Dégradé bleu amélioré
        style={styles.footer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <BlurView intensity={15} style={styles.footerBlur}>
          <Animatable.View animation="fadeIn" duration={1000}>
            <Text style={styles.footerText}>@Copyright 2025 YnJob</Text>
            <View style={styles.footerDivider} />
            <Text style={styles.footerText}>Conception : Yvan Nalaur</Text>
            <View style={styles.footerContactRow}>
              <Icon name="phone" size={14} color="#fff" style={styles.footerIcon} />
              <Text style={styles.footerText}>Tel : +237 655233322</Text>
            </View>
          </Animatable.View>
        </BlurView>
      </LinearGradient>
    </ScrollView>
  </View>
  );
};

// Styles CSS
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    backgroundColor: '#e6f7ff',
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  blurContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: 220,
    height: 110,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 8,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 2,
  },
  welcomeSubtitle: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 8,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    fontFamily: 'Roboto-Regular',
    letterSpacing: 0.5,
  },
  section: {
    marginHorizontal: 20,
    marginBottom: 40,
  },
  card: {
    borderRadius: 20,
    padding: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  carouselBlur: {
    borderRadius: 15,
    overflow: 'hidden',
    marginVertical: 10,
  },
  cvCard: {
    marginTop: 10,
    paddingBottom: 30,
  },
  carouselContainer: {
    marginVertical: 15,
  },
  carouselContent: {
    paddingHorizontal: 10,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
    backgroundColor: '#007bff',
  },
  description: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
    marginBottom: 20,
    fontFamily: 'Roboto-Regular', // Police professionnelle
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Bold', // Police professionnelle
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 10,
  },
  sectionDescription: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    fontFamily: 'Roboto-Regular', // Police professionnelle
  },
  previewItem: {
    width: itemWidth,
    marginRight: 20,
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  step: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007bff',
    fontFamily: 'Roboto-Bold', // Police professionnelle
  },
  stepDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 15,
    marginLeft: 30,
    fontFamily: 'Roboto-Regular', // Police professionnelle
  },
  startButton: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderRadius: 30,
    alignSelf: 'center',
    marginVertical: 30,
    overflow: 'hidden',
    elevation: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 35,
  },
  startButtonText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    marginRight: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    letterSpacing: 1,
  },
  buttonIcon: {
    marginLeft: 5,
  },
  footer: {
    paddingVertical: 0,
    marginTop: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  footerBlur: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 25,
  },
  footerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    fontFamily: 'Roboto-Bold',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  footerDivider: {
    width: 50,
    height: 2,
    backgroundColor: '#fff',
    marginBottom: 15,
    opacity: 0.7,
  },
  footerText: {
    fontSize: 14,
    color: '#fff',
    marginBottom: 5,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  footerContactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  footerIcon: {
    marginRight: 8,
  },
});

export default HomeScreen;
