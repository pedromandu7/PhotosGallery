import React from 'react';
import {useState} from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ButtonFlash = ({flashName, onHide}) => {
  return (
    <TouchableOpacity
      onPress={() => onHide()}
      style={[styles.buttonFlash, {width: 30, height: 30}]}>
      {flashName == 'off' ? (
        <Icon name="flash-off" size={20} color={'#fff'} />
      ) : flashName == 'on' ? (
        <Icon name="flash-on" size={20} color={'#fff'} />
      ) : flashName == 'torch' ? (
        <Icon name="highlight" size={20} color={'#fff'} />
      ) : (
        <Icon name="flash-auto" size={20} color={'#fff'} />
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

export default ButtonFlash;
