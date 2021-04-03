import React from 'react';
import {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from "react-native-vector-icons/MaterialIcons";


const BottomCameraComponet = ({dataList, imageUrl, containerStyle}) => {
  // const [count, setCount] = useState(0);
  // const onPress = () => setCount(prevCount => prevCount + 1);
  return (
    <View style={styles.container}>
      {/* <Icon name="camera-alt" size={30} color="#900900" />
      <View style={styles.iconCamera}>
        <Icon name="camera" size={45} color="#900900" />
      </View>
      <Icon name="flip-camera-android" size={45} color="black" />

      <Icon name="videocam-off" size={30} color="#900900" /> */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="camera-alt" size={40} color={'#f37272'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Icon name="delete" size={40} color={'#f37272'} />
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 150,
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    // opacity: 0.7,
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginStart: 35,
    marginEnd: 35,
  },
  iconCamera: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderWidth: 0,
    borderColor: 'black',
    borderRadius: 70,
    backgroundColor: 'black',
  },
});

export default BottomCameraComponet;
