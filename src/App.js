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

const App = () => {
  const [user, setUser] = useStorage({isLoggedIn: false}, 'user');

  RootNavigation.user.user = user;
  RootNavigation.user.setUser = setUser;

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
