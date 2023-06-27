import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import images from '../../constants/images';
import {styles} from './styles';

const {width} = Dimensions.get('window');

const SplashScreen = ({navigation, route}) => {
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);

  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.image(width)} />
    </View>
  );
};

export default SplashScreen;
