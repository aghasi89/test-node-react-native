import React, {useEffect} from 'react';
import {View, FlatList, Image, Pressable} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import UserCard from '../../components/user/userCard';
import Header from '../../components/header/header';
import {UsersScreenNavigationProp} from '../../navigation/types';
import {getUsersData, onSelectUser} from '../../store/actions/user-action';
import {usersSelector} from '../../store/selectors/user-selector';
import {IUser} from '../../store/types';
import {styles} from './users.styles';

type Props = {};

const Users: React.FC<Props> = () => {
  const navigation = useNavigation<UsersScreenNavigationProp>();
  const dispatch = useDispatch();
  const users = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsersData());
  }, []);

  const handleSelectUser = (user: IUser) => {
    dispatch(onSelectUser(user));
    navigation.navigate('EditUser');
  };
  const Item = ({item}: {item: IUser}) => (
    <UserCard data={item} onPress={() => handleSelectUser(item)} />
  );
  const handleRegisterUser = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.main}>
      <Header title="Users" />
      <View style={styles.container}>
        <FlatList
          data={users}
          renderItem={({item}: {item: IUser}) => <Item item={item} />}
          keyExtractor={item => item._id}
        />
      </View>
      <View style={styles.addButtonContainer}>
        <Pressable style={styles.addButton} onPress={handleRegisterUser}>
          <Image
            style={styles.image}
            source={require('../../assets/images/plus.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};
export default Users;
