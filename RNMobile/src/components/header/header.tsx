import React from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {styles} from './header.styles';

type Props = {
  title: string;
  onGoBack?: () => void;
};

const Header: React.FC<Props> = ({title, onGoBack}) => {
  return (
    <View style={styles.defaultcontainer}>
      <View>
        {onGoBack && (
          <Pressable onPress={onGoBack}>
            <Image
              style={styles.icon}
              resizeMode={'contain'}
              source={require('../../assets/images/backIcon.png')}
              tintColor={'white'}
            />
          </Pressable>
        )}
      </View>
      <Text style={styles.text}>{title}</Text>
      <View />
    </View>
  );
};
export default Header;
