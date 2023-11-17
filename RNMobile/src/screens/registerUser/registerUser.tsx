import React, { useState } from 'react';
import { View } from 'react-native';
import { styles } from './register.styles';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../../navigation/types';
import { useDispatch } from 'react-redux';
import { onLogin, onRegisterUser } from '../../store/actions/user-action';
import Header from '../../components/header/header';

type Props = {};
const Register: React.FC<Props> = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useDispatch();
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handlenavigateUsers = () => {
    navigation.navigate('Users');
  };
  const handleRegisterUser = () => {
    dispatch(
      onRegisterUser({
        data: {
          email,
          firstName,
          lastName,
          password,
        },
        cb: handlenavigateUsers
      }),
    );
  };
  return (
    <View style={styles.container}>
      <Header title="New User" onGoBack={handlenavigateUsers} />
      <View style={styles.form}>
        <Input
          value={email}
          placeholder="Enter text"
          onChangeText={setEmail}
          label="Email"
          errorMessage=""
        />
        <Input
          value={firstName}
          placeholder="Enter text"
          onChangeText={setFirstName}
          label="Firstname"
          errorMessage=""
        />
        <Input
          value={lastName}
          placeholder="Enter text"
          onChangeText={setLastName}
          label="Lastname"
          errorMessage=""
        />
        <Input
          value={password}
          placeholder="Enter text"
          onChangeText={setPassword}
          style={styles.inputContainer}
          label={'Password'}
          hasError={false}
          errorMessage="fdjksf khfisdf  iyheirh "
        />
        <Button
          title="Add"
          onPress={handleRegisterUser}
          disabled={false}
          style={styles.buttonContainer}
        />
      </View>
    </View>
  );
};
export default Register;
