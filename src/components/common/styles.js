import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  btnImg: dimension => ({
    width: dimension,
    height: dimension,
    borderRadius: 6,
  }),
  rightContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  btnTextContainer: isLoggedIn => ({
    flexDirection: 'row',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: isLoggedIn ? colors.primary : colors.white,
    backgroundColor: isLoggedIn ? colors.white : colors.primary,
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 6,
    marginRight: 10,
  }),
  btnText: isLoggedIn => ({
    color: isLoggedIn ? colors.primary : colors.white,
    fontWeight: '400',
    marginRight: 6,
  }),
});
