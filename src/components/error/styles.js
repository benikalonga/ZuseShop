import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 8,
    height: '100%',
    gap: 10,
  },

  errorImg: {
    height: 40,
    resizeMode: 'contain',
  },
  errorBtnTextContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.error,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  btnText: {
    color: colors.error,
    fontWeight: '400',
  },
  txt: {
    color: '#a7a7a7',
  },
});
