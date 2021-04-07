import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';

const flashSwitch = param => {
  switch (param) {
    case 'auto':
      // setFlashMode(flash_Mode = 'auto');
      console.log(flash_Mode + 'foi');
      return RNCamera.Constants.FlashMode.auto;

    case 'on':
      // setFlashMode(flash_Mode = 'on');
      console.log(flash_Mode + 'foi');
      return RNCamera.Constants.FlashMode.on;

    case 'off':
      // setFlashMode(flash_Mode = 'off');
      console.log(flash_Mode + 'foi');
      return RNCamera.Constants.FlashMode.off;

    default:
      console.log('foi para o default');
      return RNCamera.Constants.FlashMode.auto;
  }
};

// const CameraComponent = ({navigation}) => {
//   const [flash_Mode, setFlashMode] = useState(null);
//   return  (
 
//   );
// };

const styles = StyleSheet.create({
  
});

export default CameraComponent;
