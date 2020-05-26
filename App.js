import React, {useEffect, useRef, useState} from 'react';
import { StyleSheet, Text, View, Animated, SafeAreaView } from 'react-native';
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
      <Cover y={scrollY}></Cover>
      {/* <View style={{paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2}}> */}
      <Content y={scrollY}></Content>
      {/* </View> */}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', 
    // paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
    height: '100%',
  },
  content: {
    ...StyleSheet.absoluteFillObject,
  }
});
