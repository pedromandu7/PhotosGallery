import React from 'react';
import {useState} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonTime = ({timer, onHide}) => {
  return (
    <TouchableOpacity
      onPress={() => onHide()}
      style={[styles.buttonFlash, {width: 30, height: 30}]}>
      {timer === 3000 ? (
        <Icon name="timer-3" size={20} color={'#fff'} />
      ) : timer === 7000 ? (
        <Icon name="timer-10" size={20} color={'#fff'} />
      ) : (
        <Icon name="timer" size={20} color={'#fff'} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonFlash: {
    backgroundColor: '#000',
    margin: 20,
    borderRadius: 150,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
});

export default ButtonTime;
