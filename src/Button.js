import * as React from "react";
import {
  View, Text, StyleSheet, TouchableWithoutFeedback,
} from "react-native";
import { AntDesign as Icon } from "@expo/vector-icons";
import { Feather as Icons } from "@expo/vector-icons";


export const BUTTON_HEIGHT = 48;
export const BUTTON_WIDTH = 200;

export default () => (
  <TouchableWithoutFeedback>
    <View style={{flexDirection: 'row'}}>
          <View style={styles.arrow}>
                <Icon name='hearto' size={18} 
                color='white' 
                style={{alignSelf: "center", 
                paddingTop: 20, 
                opacity: 0.8,
                 paddingLeft: 5}}/>
                <Icon name='arrowdown' size={18} 
                color='white' style={{alignSelf: "center", 
                paddingTop: 20, 
                opacity: 0.8, 
                paddingLeft: 5}}/>
                <Icons name='more-horizontal' size={18} color='white' 
                style={{alignSelf: "center", 
                paddingTop: 20, 
                opacity: 0.8, paddingLeft: 5}}/>
          </View>
        <View style={styles.button}>
              <Icon name="caretright" size={24} color="white" style={{alignSelf: "center", padding: 5}}/>
        </View> 
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1ed760",
    height: BUTTON_HEIGHT,
    width: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT/2,
    justifyContent: "center",
    marginLeft: 200
  },
  arrow: {
    flexDirection: 'row',
    height: BUTTON_HEIGHT,
    width: 100,
    borderRadius: BUTTON_HEIGHT/2,
    borderColor: 'white',
    marginLeft: 10,
    overflow: 'hidden',
    opacity: .8
  }
});
