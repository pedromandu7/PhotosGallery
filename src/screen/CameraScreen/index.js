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
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <TopBarCameraComponent />
      </View>

      <View style={{flex: 9}}>
        <CameraComponent />
      </View>

      {/* <View style={{flex: 2, backgroundColor: 'black',opacity: 0.9,}}>
        <BottomCameraComponet/>
      </View> */}
    </View>
  );
};
const styles = StyleSheet.create({
  viewCenter: {
    flex: 4,
    backgroundColor: 'red',
  },
  container: {
    flex: 1,
  },
  scroll: {
    backgroundColor: 'red',
  },
});

export default CameraScreen;
