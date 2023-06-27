import React from 'react';
import colors from '../../constants/colors';
import * as RootNavigation from '../../RootNavigation';
import {styles} from './styles';
const {
  View,
  StyleSheet,
  Image,
  Text,
  Alert,
  TouchableOpacity,
} = require('react-native');

/** The Profile Screen component
 *
 * First get the user object,
 * Populate the component
 * Handle the logout feature
 */

const ProfileScreen = ({navigation, route}) => {
  const user = RootNavigation.user.user;

  /**
   * If the user clics log out, an alert dialog pops up asking to confirm
   * if confirmed, the user.isLoggedIn will be set to false
   * and will be redirected to the HomeScreen
   */
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
