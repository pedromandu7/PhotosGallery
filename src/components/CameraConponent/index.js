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

const PendingView = () => (
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

const CameraComponent = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);
  const [constantsType, setConstantsType] = useState(null);
  const [flash_Mode, setFlashMode] = useState(null);
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
  savePicture = async () => {
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
          console.log(result + '  agora sim cuzão!');
          setImageUri(null);
        }); //felicidade é o que sinto agora!
      } else {
        alert("don't have camera permission.");
      }
    } catch (err) {
      console.warn(err + ' deu ruim cuzão!');
    }
    setImageUri(null);
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
          onPress={() => savePicture()}
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
            ? RNCamera.Constants.FlashMode.off
            : RNCamera.Constants.FlashMode.on
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
                // backgroundColor: 'red',
              }}>
              <View style={styles.topBar}>
               
                <TouchableOpacity
                  onPress={() =>
                    setConstantsType(
                      constantsType == 'front' ? 'back' : 'front',
                    )
                  }
                  style={styles.buttonTop}>
                  <Icon name="flash-on" size={20} color={'#fff'} />
                </TouchableOpacity>

                <TouchableOpacity
                  // onPress={() =>
                    
                  // }
                  style={styles.buttonTop}>
                  <Icon name="flip-camera-android" size={20} color={'#fff'} />
                </TouchableOpacity>

                <TouchableOpacity
                  // onPress={() =>
                  // }
                  style={styles.buttonTop}>
                  <Icon name="flip-camera-android" size={20} color={'#fff'} />
                </TouchableOpacity>
              </View>

              <View style={styles.buttonsCamera}>
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.button}>
                  <Icon name="camera" size={60} color={'#fff'} />
                </TouchableOpacity>
                <TouchableOpacity
                  // onPress={() =>
                    
                  // }
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
    justifyContent: 'space-between',
    alignContent: 'center',
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
  buttonTop: {
    backgroundColor: '#000',
    margin: 20,
    borderRadius: 150,
    width: 30,
    height: 30,
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
