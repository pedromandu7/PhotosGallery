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

const ShowTimer = ({timer, timer3, timer10, flashTorch, onHide}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          onHide(), timer();
        }}
        style={styles.buttonTop}>
        <Icon name="timer" size={20} color={'#fff'} />
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => {
          onHide(), timer3();
        }}
        style={styles.buttonTop}>
        <Icon name="timer-3" size={20} color={'#fff'} />
      </TouchableOpacity>

      <TouchableOpacity
         onPress={() => {
          onHide(), timer10();
        }}
        style={styles.buttonTop}>
        <Icon name="timer-10" size={20} color={'#fff'} />
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

export default ShowTimer;
