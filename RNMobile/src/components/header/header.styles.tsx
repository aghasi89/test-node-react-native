import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export const styles = StyleSheet.create({
  defaultcontainer: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    marginBottom: 10,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '500',
  },
  icon: {
    height: 50,
    width: 25,
  },
});
