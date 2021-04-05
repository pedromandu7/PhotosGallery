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
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Waiting...</Text>
  </View>
);

const CameraComponent = ({navigation}) => {
  const [imageUri, setImageUri] = useState(null);

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
          style={{marginRight:30}}
        />
        <Icon
          name="check"
          size={30}
          color="#fff"
          onPress={() => savePicture()}
          style={{marginLeft:30}}
        />
      </View>
    </ImageBackground>
  ) : (
    <View style={styles.container}>
      <View style={styles.photo}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}>
          {({camera, status, recordAudioPermissionStatus}) => {
            if (status !== 'READY') return <PendingView />;
            return (
              <View
                style={{
                  flex: 0,
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}>
                <View style={styles.buttons}>
                  <TouchableOpacity
                    onPress={() => this.takePicture(camera)}
                    style={styles.capture}>
                    <Icon name="camera-alt" size={40} color={'#f37272'} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      cameraState = RNCamera.Constants.Type.front;
                    }}>
                    <Icon name="videocam" size={40} color={'#f37272'} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </RNCamera>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f37272',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 10,
    maxHeight: 50,
    maxWidth: 50,
  },
  photo: {
    width: 300,
    height: 400,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 30,
  },
  buttons: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  previewPhoto: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonsPreview: {
    flexDirection: 'row',
    justifyContent:  'space-between',
    padding: 10,
    
            
            marginEnd: 10,
            marginStart: 10,
  },
});

export default CameraComponent;
