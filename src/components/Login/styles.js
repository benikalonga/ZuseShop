import colors from '../../constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
