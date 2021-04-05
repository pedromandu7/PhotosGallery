import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import BottomCameraComponet from '../../components/BottomCameraComponent';
import CameraComponent from '../../components/CameraConponent';
import TopBarCameraComponent from '../../components/TopBarCameraComponent';

const CameraScreen = ({navigation}) => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          // flexDirection: 'row',
        },
      ]}>
      <View style={styles.topBar}>
        <TopBarCameraComponent />
      </View>

      <View style={styles.camera}>
        <CameraComponent />
      </View>

      {/* <View style={{flex: 2, backgroundColor: 'black',opacity: 0.9,}}>
        <BottomCameraComponet/>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex: 1,
  },
  camera: {
    flex: 9,
  },
  
});

export default CameraScreen;
