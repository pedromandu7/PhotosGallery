import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import logo from './../../assets/logo-react.png';


const TopBarCameraComponent = ({dataList, imageUrl, containerStyle}) => {
  return (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
  </View>)
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    maxHeight: 50,
    maxWidth: 50,
  },

});

export default TopBarCameraComponent;
