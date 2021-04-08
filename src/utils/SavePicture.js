import React from 'react';
import {
  Image,
  ImageBackground,
  PermissionsAndroid,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';

const SavePicture = async (imageUri) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Access Storage',
          message: 'Access Storage for the pictures',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        CameraRoll.save(imageUri, 'photo').then(result => {
          console.log(result + '  ai sim cuzão!');
        }); 
      } else {
        alert("don't have camera permission.");
      }
    } catch (err) {
      console.warn(err + ' deu ruim cuzão!');
    }
    // setImageUri(null);
  };

export default SavePicture;