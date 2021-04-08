import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'; 
import Icon from 'react-native-vector-icons/MaterialIcons';
 
const ShowFlash = ({flashOn, flashOff, flashAuto, flashTorch, onHide}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onHide(), flashOff();
        }}
        style={styles.buttonTop}>
        <Icon name="flash-off" size={20} color={'#fff'} />
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => {
          onHide(), flashOn();
        }}
        style={styles.buttonTop}>
        <Icon name="flash-on" size={20} color={'#fff'} />
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => {
          onHide(), flashAuto();
        }}
        style={styles.buttonTop}>
        <Icon name="flash-auto" size={20} color={'#fff'} />
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => {
          onHide(), flashTorch();
        }}
        style={styles.buttonTop}>
        <Icon name="highlight" size={20} color={'#fff'} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTop: {
    backgroundColor: '#000',
    margin: 20,
    borderRadius: 150,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
});

export default ShowFlash;
