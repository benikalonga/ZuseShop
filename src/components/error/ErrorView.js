import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../../constants/images';
import colors from '../../constants/colors';
import {styles} from './styles';

/**
 * The error component used to display an error
 */
export const ErrorView = ({onRefresh}) => {
  return (
    <View style={styles.errorContainer}>
      <Image style={styles.errorImg} source={images.icon} />
      <Text style={{color: '#a7a7a7'}}>Something went Wrong </Text>
      <TouchableOpacity
        style={styles.errorBtnTextContainer}
        onPress={onRefresh}>
        <Text style={styles.btnText}>Refresh</Text>
      </TouchableOpacity>
    </View>
  );
};
