import colors from '../../constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
