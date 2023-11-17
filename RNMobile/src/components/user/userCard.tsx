import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './userCard.styles';
import {IUser} from '../../store/types';

type Props = {
  data: IUser;
  onPress: () => void;
};

const UserCard: React.FC<Props> = ({data, onPress}) => {
  const {firstName, lastName, email} = data;
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.titles}>
        <Text style={styles.title}>Firstname:</Text>
        <Text style={styles.title}>Lastname:</Text>

        <Text style={styles.title}>Email:</Text>
      </View>
      <View style={styles.values}>
        <Text style={styles.value}>{firstName}</Text>
        <Text style={styles.value}>{lastName}</Text>
        <Text style={styles.value}>{email}</Text>
      </View>
      <View style={styles.icon}>
        <Image
          source={require('../../assets/images/edit.png')}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};
export default UserCard;
