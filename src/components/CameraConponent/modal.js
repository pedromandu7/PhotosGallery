import React, { useState } from "react";
import { Modal, View, Image, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import { RNCamera } from "react-native-camera";

const Camera = ({ isVisible, onChangePhoto, onCloseCamera }) => {
  const [camera, setCamera] = useState();

  return (
    <Modal animationType="slide" transparent={false} visible={isVisible}>
      <RNCamera
        ref={ref => setCamera(ref)}
        style={{ flex: 1 }}
        type={RNCamera.Constants.Type.back}
        autoFocus={RNCamera.Constants.AutoFocus.on}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: "Permissão para usar a câmera",
          message: "Precisamos da sua permissão para usar a câmera.",
          buttonPositive: "Ok",
          buttonNegative: "Cancelar"
        }}
        captureAudio={false}
      >
        <Icon
          name="photo-camera"
          size={40}
          color={"#fff"}
          onPress={() => {}}
          style={styles.buttonTakePicture}
        />
        <Icon
          name="close"
          size={50}
          color={"#fff"}
          onPress={onCloseCamera}
          style={styles.buttonCloseCamera}
        />
      </RNCamera>
    </Modal>
  );
};

const App = () => {
  const [isCameraVisible, setIsCameraVisible] = useState(false);

  const onCloseCamera = () => {
    setIsCameraVisible(false);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.photo}></View>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setIsCameraVisible(true);
          }}
        >
          <Icon name="camera-alt" size={40} color={"#f37272"} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="delete" size={40} color={"#f37272"} />
        </TouchableOpacity>
      </View>
      <Camera isVisible={isCameraVisible} onCloseCamera={onCloseCamera} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f37272"
  },
  logo: {
    alignSelf: "center",
    marginTop: 60
  },
  photo: {
    width: 300,
    height: 200,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 80
  },
  buttons: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center"
  },
  button: {
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTakePicture: {
    flex: 0,
    alignSelf: "center",
    position: "absolute",
    bottom: 20
  },
  buttonCloseCamera: {
    flex: 0,
    position: "absolute",
    top: 20,
    right: 20
  }
});

export default App;