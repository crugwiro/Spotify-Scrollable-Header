import React from 'react'
import {Text, View, StyleSheet, Animated} from 'react-native'
import {HEADER_DELTA, MIN_HEADER_HEIGHT} from './Cover'
import {BUTTON_HEIGHT} from './Button'
import Constants from "expo-constants";
import { LinearGradient } from 'expo-linear-gradient';

export const HEADER_MAX_HEIGHT=120;
export const HEADER_MIN_HEIGHT=70;
const Header = ({y}) => {
    const opacity = y.interpolate({
        inputRange: [HEADER_DELTA - 6, HEADER_DELTA - 2],
        outputRange: [0, 0.5],
        extrapolate: 'clamp',
      });
      const textOpacity = y.interpolate({
        inputRange: [HEADER_DELTA -16, HEADER_DELTA -10],
        outputRange: [0, 1],
        extrapolate: 'clamp',
      });
    return (
        <Animated.View style={[styles.container, {opacity}]}>
            <Animated.Text style={[styles.title, {opacity:textOpacity}]}>Kendrick Lamar</Animated.Text>
        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: BUTTON_HEIGHT / 2 - MIN_HEADER_HEIGHT,
        left: 0,
        right: 0,
        height: MIN_HEADER_HEIGHT,
        backgroundColor: '#CCFFFF',
        color: '#fff',
        paddingTop: Constants.statusBarHeight,
      },
      title: {
        color: "black",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
      },
});

export default Header;