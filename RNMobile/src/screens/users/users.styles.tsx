import {StyleSheet} from 'react-native';
import {COLORS} from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    flex: 1,
  },
  main: {
    flex: 1,
  },
  addButton: {
    backgroundColor: COLORS.white,
    height: 60,
    width: 60,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    height: 30,
    width: 30,
  },
  addButtonContainer: {
    width: 60,
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
