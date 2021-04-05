import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GalleryScreen = ({navigation, imageURI}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={{flex: 1}} source={{uri: imageURI}} />
      <Button
        onPress={() => navigation.goBack()}
        title="back"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default GalleryScreen;
