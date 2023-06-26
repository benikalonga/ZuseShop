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

const LoginScreen = ({navigation, route}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');

  const {data, isLoading, setIsLoading, error, rePost} = usePost();

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

    rePost(userEmail, userPassword, dataUser => {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingLeft: 24,
    paddingRight: 24,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 160,
    borderRadius: 200,
    borderColor: colors.black,
    borderWidth: 3,
  },
  avatar: {
    width: 80,
    height: 80,
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
    flex: 1,
    borderRadius: 100,
    backgroundColor: colors.orange,
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  btnText: {
    color: colors.white,
    fontWeight: '400',
    textTransform: 'uppercase',
  },

  btnTextContainerOutline: {
    borderRadius: 100,
    borderBlockColor: colors.grey,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  btnTextOutline: {
    color: colors.primary,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
  inputStyle: {
    color: 'white',
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#dadae8',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  inputError: {
    color: colors.red,
  },

  titleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
