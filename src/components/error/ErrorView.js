import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import images from '../../constants/images';
import colors from '../../constants/colors';

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

const styles = StyleSheet.create({
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    height: '100%',
    gap: 10,
  },

  errorImg: {
    height: 40,
    resizeMode: 'contain',
  },
  errorBtnTextContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.error,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  btnText: {
    color: colors.error,
    fontWeight: '400',
  },
});
