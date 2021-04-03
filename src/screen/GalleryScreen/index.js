import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const GalleryScreen = ({navigation}) => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={styles.topBar}></View>
      <View style={{flex: 9, backgroundColor: ''}}>
        <ScrollView>
        </ScrollView>
      </View>
      <View style={{flex: 2, backgroundColor: 'darkgreen'}}></View>
    </View>
  );
};
const styles = StyleSheet.create({
  topBar: {
    flex: 1,
    backgroundColor: 'pink',
  },
  viewCenter: {
    flex: 4,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
  },
});
export default GalleryScreen;
