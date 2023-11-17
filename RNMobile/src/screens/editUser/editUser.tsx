import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {styles} from './editUser.styles';
import Header from '../../components/header/header';
import Input from '../../components/input/input';
import Button from '../../components/button/button';
import {useNavigation} from '@react-navigation/native';
import {EditUserScreenNavigationProp} from '../../navigation/types';
import {useDispatch, useSelector} from 'react-redux';
import {selectedUserSelector} from '../../store/selectors/user-selector';
import {IUser} from '../../store/types';
import {editUserData} from '../../store/actions/user-action';

type Props = {};

const EditUser: React.FC<Props> = () => {
  const navigation = useNavigation<EditUserScreenNavigationProp>();
  const dispatch = useDispatch();
  const selectedUser = useSelector(selectedUserSelector);
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  useEffect(() => {
    setFirstName(selectedUser?.firstName);
    setLastName(selectedUser?.lastName);
  }, [selectedUser]);
  const handleEditUserData = () => {
    dispatch(
      editUserData({
        data: {
          id: selectedUser?._id,
          firstName: firstName,
          lastName: firstName,
        },
        cb: () => {navigation.navigate('Users')},
      }),
    );
  };

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.main}>
      <Header title="Edit User" onGoBack={handleGoBack} />
      <View style={styles.container}>
        <Input
          label="Name"
          value={firstName}
          placeholder="Name"
          onChangeText={setFirstName}
          errorMessage=""
        />
        <Input
          label="Lastname"
          value={lastName}
          placeholder="Lastname"
          onChangeText={setLastName}
          errorMessage=""
        />
        <Button
          title="Save"
          onPress={handleEditUserData}
          disabled={false}
          style={styles.buttonContainer}
        />
      </View>
    </View>
  );
};
export default EditUser;
