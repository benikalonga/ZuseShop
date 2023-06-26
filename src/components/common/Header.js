import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

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

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  btnImg: dimension => ({
    width: dimension,
    height: dimension,
    borderRadius: 6,
  }),
  rightContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  btnTextContainer: isLoggedIn => ({
    flexDirection: 'row',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: isLoggedIn ? colors.primary : colors.white,
    backgroundColor: isLoggedIn ? colors.white : colors.primary,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginRight: 10,
  }),
  btnText: isLoggedIn => ({
    color: isLoggedIn ? colors.primary : colors.white,
    fontWeight: '400',
    marginRight: 6,
  }),
});
