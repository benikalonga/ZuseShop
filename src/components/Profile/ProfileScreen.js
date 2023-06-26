import React from 'react';
import colors from '../../constants/colors';
import * as RootNavigation from '../../RootNavigation';
const {
  View,
  StyleSheet,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} = require('react-native');

const ProfileScreen = ({navigation, route}) => {
  const user = RootNavigation.user.user;

  const handleLogOut = () => {
    Alert.alert('Log out', 'You are about to log out ', [
      {
        text: 'Cancel',
        type: 'Cancel',
      },
      {
        text: 'Confirm',
        onPress: () => {
          RootNavigation.user.setUser({isLoggedIn: false});
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.avatar} source={user.profile} />
        <Text>@{user.userName}</Text>
        <Text style={styles.name}>
          {user.name} {user.surname}
        </Text>
        <Text style={styles.userInfo}>{user.email}</Text>
        <TouchableOpacity
          style={styles.btnTextContainer}
          onPress={handleLogOut}>
          <Text style={styles.btnText}>Log out...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 40,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  avatar: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 200,
    borderColor: colors.primary,
    borderWidth: 2,
  },
  name: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 18,
  },
  userInfo: {
    color: colors.black,
  },

  btnTextContainer: {
    borderRadius: 100,
    borderWidth: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginTop: 20,
  },
  btnText: {
    color: colors.white,
    fontWeight: '400',
    marginRight: 6,
    textTransform: 'uppercase',
  },
});
