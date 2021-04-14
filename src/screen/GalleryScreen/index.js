import React, {useRef} from 'react';
import {Animated, Text, View, StyleSheet, Button} from 'react-native';

const GalleryScreen = () => {
  const [visible, setVisible] = useState(true);

  // inicia com value 0
  const fadeAnim = useRef(new Animated.Value(0)).current;

  return (
    <Text>arroz</Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fadingContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    // backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    marginVertical: 16,
  },
});

export default GalleryScreen;
