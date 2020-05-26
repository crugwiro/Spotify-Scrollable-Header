import React from 'react'
import { Image, StyleSheet, Animated, Dimensions} from "react-native";
import Constants from "expo-constants";
import {BUTTON_HEIGHT} from './Button'

const φ = (1 + Math.sqrt(5)) / 2;
const { height } = Dimensions.get("window");

export const MIN_HEADER_HEIGHT = 64 + Constants.statusBarHeight;
export const MAX_HEADER_HEIGHT = height * (1 - 1 / φ);
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;

const Cover = ({y}) => {
  const scale = y.interpolate({
    inputRange: [-MAX_HEADER_HEIGHT, 0],
    outputRange: [2, 1],
    extrapolateRight: 'clamp',
  });
  const opacity = y.interpolate({
    inputRange: [-64, 0, HEADER_DELTA],
    outputRange: [0, 0.2, 1],
    extrapolate:'clamp',
  });
  
    return (
        <Animated.View style={[styles.container, { transform: [{ scale }] }]}>
          <Image style={styles.image} source={require('../assets/kendrick.jpg')} />
          <Animated.View
            style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black", opacity}}
          />
        </Animated.View>
      );
}

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2,
    },
    image: {
      ...StyleSheet.absoluteFillObject,
      width: null,
      height: null,
    },
  });

  export default Cover;