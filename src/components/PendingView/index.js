import React from 'react';
import {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';

const PendingView = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}>
      <Text style={{color: 'white', fontSize: 30, width: '100%'}}>
        Waiting...
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default PendingView;
