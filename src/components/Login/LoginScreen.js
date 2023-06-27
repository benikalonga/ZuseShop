import React, {useState, createRef} from 'react';
import colors from '../../constants/colors';
import images from '../../constants/images';
import usePost from '../../hook/usePost';
import * as RootNavigation from '../../RootNavigation';
const {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Keyboard,
  ActivityIndicator,
  Alert,
} = require('react-native');
import {styles} from './styles';

/**
 * LoginScreen, post the email and password to the API and listen to the response event
 * if success, update the user object and store it in the local storage
 */
const LoginScreen = ({navigation, route}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const {data, isLoading, setIsLoading, error, rePost: logUser} = usePost();

  const passwordInputRef = createRef();

  const handleLogIn = () => {
    if (!userEmail) {
      setEmailError('Enter a valid email address');
      return;
    } else setEmailError('');
    if (!userPassword) {
      setPasswordError('Enter a valid password');
      return;
    } else setPasswordError('');

    logUser(userEmail, userPassword, dataUser => {
      if (dataUser) {
        RootNavigation.user.setUser({
          profile: images.profile,
          userName: 'benikalonga',
          name: 'Beni',
          surname: 'Kalonga',
          email: userEmail,
          password: userPassword,
          isLoggedIn: true,
        });

        navigation.goBack();
      } else {
        Alert.alert('Oups !!!', 'Something went wrong... ', [
          {text: 'Close', onPress: () => console.log('OK Pressed')},
        ]);
      }
    });
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView enabled>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image style={styles.avatar} source={images.userIconBlack} />
          </View>
          <Text style={styles.titleText}>Get access every where</Text>
          <Text>Log in to use all the features</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={UserEmail => setUserEmail(UserEmail)}
            placeholder="Enter Email"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
            color={colors.black}
          />
          {emailError && <Text style={styles.inputError}>{emailError}</Text>}
          <TextInput
            style={styles.inputStyle}
            onChangeText={UserPassword => setUserPassword(UserPassword)}
            placeholder="Enter Password"
            placeholderTextColor="#8b9cb5"
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            underlineColorAndroid="#f000"
            returnKeyType="next"
            color={colors.black}
          />

          {passwordError && (
            <Text style={styles.inputError}>{passwordError}</Text>
          )}

          {error?.message ? <Text>{error.message}</Text> : null}

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnTextContainer}
              onPress={handleLogIn}>
              <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnTextContainerOutline}
              onPress={handleCancel}>
              <Text style={styles.btnTextOutline}>Cancel</Text>
            </TouchableOpacity>
            {isLoading && <ActivityIndicator size="large" />}
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
