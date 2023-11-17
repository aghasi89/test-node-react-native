import React, {useEffect} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Navigation from '../navigation/navigation';
import {isLoginSelector} from '../store/selectors/user-selector';
import {onCheckToken} from '../store/actions/user-action';
import Login from './login/login';
import {COLORS} from '../assets/colors';

function Main(): JSX.Element {
  const isLogin = useSelector(isLoginSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(onCheckToken());
  }, [dispatch]);

  if (isLogin === undefined) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={'large'} color={COLORS.primary} />
      </View>
    );
  }
  return isLogin ? <Navigation /> : <Login />;
}

export default Main;
const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
