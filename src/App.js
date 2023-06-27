import React from 'react';
import HomeScreen from './components/Home/HomeScreen';
import LoginScreen from './components/Login/LoginScreen';
import ProductDetailScreen from './components/Product/ProductDetailScreen';
import SplashScreen from './components/Splash/SplashScreen';
import Header from './components/common/Header';
import images from './constants/images';
import colors from './constants/colors';
import ProfileScreen from './components/Profile/ProfileScreen';
import AddProductScreen from './components/Product/AddProductScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';
import {useStorage} from './hook/useStorage';
import * as RootNavigation from './RootNavigation';

const Stack = createNativeStackNavigator();

/* Main Component
 * Container is a NavigationContainer
 * We have the HomeScreen, ProductDetailScreen, LoginScreen, DetailScreen, ProfileScreen and AddProductScreen
 * with the SplashScreen as the initial visible Screen
 */
const App = () => {
  // I use a custom hook to get and save the user localy
  const [user, setUser] = useStorage({isLoggedIn: false}, 'user');

  // I used a RootNavigation to hold the navigation and the user object all over the code
  RootNavigation.user.user = user;
  RootNavigation.user.setUser = setUser;

  // OnClick the login button,
  // if the user is logged in it opens the ProfileScreen and the LoginScreen Otherwise
  const handlePressLogin = _ => {
    user.isLoggedIn
      ? RootNavigation.navigate('ProfileScreen')
      : RootNavigation.navigate('LoginScreen');
  };

  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{
            title: '',
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'ZuseShop',
            headerShadowVisible: false,
            headerLeft: props => (
              <Header.LeftView iconUrl={images.icon} dimension={24} />
            ),
            headerRight: () => (
              <Header.RightView
                user={user}
                iconUrl={user.isLoggedIn ? user.profile : images.userIcon}
                dimension={28}
                handlePress={handlePressLogin}
              />
            ),
          }}
        />
        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{
            title: '',
            headerShadowVisible: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            title: '',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            title: '',
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen
          name="AddProductScreen"
          component={AddProductScreen}
          options={{
            title: '',
            headerShadowVisible: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
