// 94981157928;
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
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraRoll from '@react-native-community/cameraroll';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RNFS from 'react-native-fs';
import PendingView from '../PendingView';
import SavePicture from '../../utils/SavePicture';
import ShowFlash from '../Elements/Flash';
import ShowTimer from '../Elements/Timer';
import ButtonFlash from '../Elements/Button/ButtonFlash';
import ButtonTime from '../Elements/Button/ButtonTimer';

const CameraComponent = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [constantsType, setConstantsType] = useState(null);
  const [flash_Mode, setFlash_Mode] = useState(null);
  const [showFlash_Modes, setShowFlashMode] = useState(false);
  const [showTimer, setShowTimer] = useState(null);
  const [timer, setTimer] = useState(null);
  takePicture = async camera => {
    try {
      if (camera) {
        const options = {
          quality: 0.5,
          base64: true,
          forceUpOrientation: true,
          fixOrientation: true,
        };
        const data = await camera.takePictureAsync(options);
        setImageUri(data.uri);
        console.log(data.uri); //só para logar o caminho da imagen na cache
      }
    } catch (err) {
      alert('deu ruim ' + err.message);
    }
  };

  return imageUri ? (
    <ImageBackground style={styles.previewPhoto} source={{uri: imageUri}}>
      <View style={styles.buttonsPreview}>
        <Icon
          name="backspace"
          size={30}
          color="#fff"
          onPress={() => setImageUri(null)}
          style={{marginRight: 30}}
        />
        <Icon
          name="check"
          size={30}
          color="#fff"
          onPress={() => SavePicture(imageUri).then(() => setImageUri(null))}
          style={{marginLeft: 30}}
        />
      </View>
    </ImageBackground>
  ) : (
    <View style={styles.container}>
      <RNCamera
        style={styles.rnCamera}
        type={
          constantsType === 'back'
            ? RNCamera.Constants.Type.front
            : RNCamera.Constants.Type.back
        }
        flashMode={
          flash_Mode === 'on'
            ? RNCamera.Constants.FlashMode.on
            : flash_Mode === 'auto'
            ? RNCamera.Constants.FlashMode.auto
            : flash_Mode === 'torch'
            ? RNCamera.Constants.FlashMode.torch
            : RNCamera.Constants.FlashMode.off
        }
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Okay',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Okay',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status, recordAudioPermissionStatus}) => {
          if (status !== 'READY') return <PendingView />;
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'space-between',
              }}>
              <View style={styles.topBar}>
                {showFlash_Modes == true ? (
                  <ShowFlash
                    onHide={() => setShowFlashMode(false)}
                    flashOn={() => setFlash_Mode('on')}
                    flashOff={() => setFlash_Mode('off')}
                    flashAuto={() => setFlash_Mode('auto')}
                    flashTorch={() => setFlash_Mode('torch')}
                  />
                ) : showTimer == true ? (
                  <ShowTimer
                    onHide={() => setShowTimer(false)}
                    timer={() => setTimer(null)}
                    timer3={() => setTimer(true)}
                    timer10={() => setTimer(false)}
                  />
                ) : (
                  <View style={styles.topBar}>
                    <ButtonFlash
                      onHide={() => setShowFlashMode(true)}
                      flashName={flash_Mode}
                    />
                    <ButtonTime
                      onHide={() => setShowTimer(true)}
                      timer={timer}
                    />
                  </View>
                )}
              </View>

              <View style={styles.buttonsCamera}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.button}>
                  <Icon name="camera" size={60} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    setConstantsType(
                      constantsType == 'front' ? 'back' : 'front',
                    )
                  }
                  style={styles.button}>
                  <Icon name="flip-camera-android" size={50} color={'#fff'} />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f37272',
    alignSelf: 'center',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 10,
    maxHeight: 50,
    maxWidth: 50,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsCamera: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000',
    margin: 20,
    borderRadius: 150,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.5,
  },
  rnCamera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  previewPhoto: {
    //não mexe
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsPreview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginEnd: 10,
    marginStart: 10,
  },
});

export default CameraComponent;
