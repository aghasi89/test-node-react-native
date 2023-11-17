import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderColor: COLORS.gray,
    borderWidth: 0.8,
    marginBottom: 10,
    borderRadius: 10,
    padding: 5,
  },
  title: {
    fontWeight: '500',
    color: COLORS.darkPrimary,
    fontSize: 16,
    paddingVertical: 2,
  },
  titles: {
    width: '30%',
    paddingLeft: 16,
  },
  values: {
    width: '60%',
  },
  value: {
    fontSize: 16,
    paddingVertical: 2,
  },
  icon: {
    width: '10%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
    height: 25,
    width: 25,
  },
});
