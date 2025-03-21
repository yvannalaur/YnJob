import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

const { width, height } = Dimensions.get('window');

const AnimatedPolygon = Animated.createAnimatedComponent(Polygon);

const AnimatedTriangles = () => {
    const triangleAnim1 = useRef(new Animated.Value(0)).current;
    const triangleAnim2 = useRef(new Animated.Value(0)).current;
    const triangleAnim3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.parallel([
                Animated.timing(triangleAnim1, {
                    toValue: 1,
                    duration: 3000,
                    useNativeDriver: true,
                }),
                Animated.timing(triangleAnim2, {
                    toValue: 1,
                    duration: 4000,
                    useNativeDriver: true,
                }),
                Animated.timing(triangleAnim3, {
                    toValue: 1,
                    duration: 5000,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, [triangleAnim1, triangleAnim2, triangleAnim3]);

    const getTrianglePoints = (index) => {
        const numTriangles = 30;
        const angleStep = (2 * Math.PI) / numTriangles;
        const angle = index * angleStep;
        const radius = Math.min(width, height) * 0.6;
        const centerX = width / 2;
        const centerY = height / 2;

        const animValue = [triangleAnim1, triangleAnim2, triangleAnim3][index % 3];
        // Utiliser l'interpolation directement dans les calculs de points
        const scale = animValue.__getValue() * 0.4 + 0.8; // Échelle entre 0.8 et 1.2 basée sur la valeur d'animation


        const points = [];
        for (let i = 0; i < 3; i++) {
            const vertexAngle = angle + (i * 2 * Math.PI) / 3;
            const x = centerX + radius * Math.cos(vertexAngle) * scale;
            const y = centerY + radius * Math.sin(vertexAngle) * scale;
            points.push(`${x},${y}`);
        }
        return points.join(' ');
    };


    return (
        <View style={styles.container}>
            <Svg height="100%" width="100%">
                {Array.from({ length: 30 }, (_, index) => (
                    <AnimatedPolygon
                        key={index}
                        points={getTrianglePoints(index)}
                        fill="#00A8E8" // Electric blue
                        opacity={0.5}
                    />
                ))}
            </Svg>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
});

export default AnimatedTriangles;
