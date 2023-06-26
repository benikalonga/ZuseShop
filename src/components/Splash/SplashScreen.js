import {View, Image, StyleSheet, Dimensions} from 'react-native';
import images from '../../constants/images';
import colors from '../../constants/colors';

const {width} = Dimensions.get('window');

const SplashScreen = ({navigation, route}) => {
  setTimeout(() => {
    navigation.replace('Home');
  }, 3000);

  return (
    <View style={styles.container}>
      <Image source={images.logo} style={styles.image} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: width / 2.5,
    height: width / 2.5,
  },
});
