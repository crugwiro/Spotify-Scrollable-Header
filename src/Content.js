import React from "react";
import {StyleSheet, View, Animated} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign as Icon } from "@expo/vector-icons";

import {MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT} from './Cover'
import {BUTTON_HEIGHT} from './Button'
import Header from './Header'
import Track from './Track'
import Button from './Button'


const Content = ({y}) => {
    const height = y.interpolate({
        inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
        outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
        extrapolate: 'clamp',
      });
      const opacity = y.interpolate({
        inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
        outputRange: [0, 1, 0],
        extrapolate: 'clamp',
      });
    const artist = "Kendrick Lamar"
    const tracks = [
        { name: "Stories Over" },
        { name: "More", artist: "Jan Blomqvist, Elena Pitoulis" },
        { name: "Empty Floor" },
        { name: "Her Great Escape" },
        { name: "Dark Noise" },
        { name: "Drift", artist: "Jan Blomqvist, Aparde" },
        { name: "Same Mistake" },
        { name: "Dancing People Are Never Wrong", artist: "Jan Blomqvist, The Bianca Story" },
        { name: "Back in the Taxi" },
        { name: "Ghosttrack" },
        { name: "Just OK" },
        { name: "The End" },
        { name: "Back in the Taxi" },
        { name: "Ghosttrack" },
        { name: "Just OK" },
        { name: "The End" },
    ]
    return (
        <Animated.ScrollView
        onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {y}
                }
              }
            ]
          )}
      style={styles.container}
      showsVerticalScrollIndicator={false}
      scrollEventThrottle={1}
      stickyHeaderIndices={[1]}
    >
      <View style={styles.cover}>
        <Animated.View
          style={[styles.gradient, { height }]}
        >
          <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={["transparent", "rgba(0, 0, 0, 0.2)", "black"]}
          />
        </Animated.View>

        <View style={styles.artistContainer}>
          <Animated.Text style={[styles.artist, { opacity }]}>{artist}</Animated.Text>
        </View>
      </View>

      <View style={styles.header}>
        <Header y={y}/>
        {/* <Icon name='arrowdown' size={20} color='white'/> */}
        <Button />

      </View>

      <View style={styles.tracks}>
        {tracks.map((t, index) => {
            return (
                <Track key={index} track={t.name} artist={t.artist} index={index+1}/>
            )

        })
        }
      </View>
    </Animated.ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
      flexGrow: 1,
      marginBottom: 50
    },
    cover: {
      height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
    },
    gradient: {
      position: "absolute",
      left: 0,
      bottom: 0,
      right: 0,
      alignItems: "center",
    },
    artistContainer: {
      ...StyleSheet.absoluteFillObject,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2
    },
    artist: {
      textAlign: "center",
      color: "white",
      fontSize: 40,
      fontWeight: "bold",
    },
    header: {
      marginTop: -BUTTON_HEIGHT,
      flexDirection: 'row'
    },
    tracks: {
      paddingTop: 32,
      backgroundColor: "black",
      paddingBottom: 10
    },
  });


export default Content;

