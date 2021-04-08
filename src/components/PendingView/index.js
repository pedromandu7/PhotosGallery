import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

const PendingView = ({navigation}) => {
 
  return  (
    <View
    style={{
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text style={{color: 'black', fontSize: 30}}>Waiting...</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  
});

export default PendingView;
