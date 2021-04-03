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
} from 'react-native';
import {RNCamera} from 'react-native-camera';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';


const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);

const CameraComponent = ({data, imageUrl, containerStyle}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photo}>
        <RNCamera
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
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
                <TouchableOpacity
                  onPress={() => this.takePicture(camera)}
                  style={styles.capture}>
                  <Text style={{fontSize: 14}}> SNAP </Text>
                </TouchableOpacity>
              </View>
            );
          }}
        </RNCamera>
      </View>
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={takePicture.bind()} style={styles.capture}>
          <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
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
};

takePicture = async function(camera) {
  const options = { quality: 0.5, base64: true };
  const data = await camera.takePictureAsync(options);
  //  eslint-disable-next-line
  console.log(data.uri);
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
});

export default CameraComponent;