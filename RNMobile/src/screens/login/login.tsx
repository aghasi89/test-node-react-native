import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {
  errorMessageSelector,
  hasErrorSelector,
} from '../../store/selectors/user-selector';
import {onLogin, setHasError} from '../../store/actions/user-action';
import {styles} from './login.styles';

type Props = {};
const Login: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const errorMessage = useSelector(errorMessageSelector);
  const hasError = useSelector(hasErrorSelector);
  const handleSignIn = () => {
    if (email && password) {
      dispatch(
        onLogin({
          data: {
            email,
            password,
          },
        }),
      );
    }
  };
  const handleChangeEmail = (value: string) => {
    setEmail(value);
    dispatch(setHasError(false));
  };
  const handleChangePassword = (value: string) => {
    setPassword(value);
    dispatch(setHasError(false));
  };

  return (
    <View style={styles.container}>
      <Input
        value={email}
        placeholder="Login"
        onChangeText={handleChangeEmail}
        label="Login"
        errorMessage={errorMessage}
        hasError={hasError}
      />
      <Input
        value={password}
        placeholder="Login"
        onChangeText={handleChangePassword}
        style={styles.inputContainer}
        label={'Password'}
        hasError={hasError}
        errorMessage={errorMessage}
      />
      <Button
        title="Sign in"
        onPress={handleSignIn}
        disabled={!(email && password)}
        style={styles.buttonContainer}
      />
    </View>
  );
};
export default Login;
