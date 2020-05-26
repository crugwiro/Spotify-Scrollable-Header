import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View, Animated, SafeAreaView, StatusBar } from 'react-native';
import Header from './src/Header';
import Button from './src/Button';
import Cover from './src/Cover'
import Track from './src/Track'
import Content from './src/Content'
import {MIN_HEADER_HEIGHT} from './src/Cover'
import {BUTTON_HEIGHT} from './src/Button'

export default function App() {
  const [scrollY]=useState(new Animated.Value(0));
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Cover y={scrollY}></Cover>
      {/* <View style={StyleSheet.absoluteFill}> */}
      <Content y={scrollY}></Content>
      {/* </View> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: 'black', 
    flexGrow: 1,
    // paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
    height: '100%',
    // ...StyleSheet.absoluteFillObject
  },
  content: {
    ...StyleSheet.absoluteFillObject,
  }
});
