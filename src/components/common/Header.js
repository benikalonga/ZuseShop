import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

/**
 * The Header to show the logo and text on the top left corner
 */
const LeftView = ({iconUrl, dimension, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

/**
 * The Header to show the button login or the user state on the top left corner
 */
const RightView = ({iconUrl, user, dimension, handlePress}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.rightContainer}>
      <TouchableOpacity
        style={styles.btnTextContainer(user.isLoggedIn)}
        onPress={() => {
          handlePress(navigation);
        }}>
        <Text style={styles.btnText(user.isLoggedIn)}>
          {user.isLoggedIn ? `${user.name} ${user?.surname}` : 'Login'}
        </Text>
        <Image
          source={iconUrl}
          resizeMode="cover"
          style={styles.btnImg(dimension / 1.2)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default {LeftView, RightView};
