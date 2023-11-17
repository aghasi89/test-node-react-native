import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 4,
    backgroundColor: COLORS.gray100,
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  input: {
    fontSize: 16,
    color: COLORS.grey900,
    width: 340,
  },
  label: {
    fontSize: 12,
    paddingLeft: 16,
    color: COLORS.gray,
    fontWeight: '500',
  },
  error: {
    color: COLORS.error,
    fontSize: 11,
    paddingLeft: 16,
  },
});
