import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export const styles = StyleSheet.create({
  defaultcontainer: {
    width: '100%',
    paddingVertical: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.opacity02,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 2,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  text: {
    fontSize: 16,
    color: COLORS.white,
  },
});
