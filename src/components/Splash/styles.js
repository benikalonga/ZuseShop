import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: width => ({
    width: width / 2.5,
    height: width / 2.5,
  }),
});
