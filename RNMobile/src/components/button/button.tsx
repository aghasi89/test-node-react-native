import React from 'react';
import {View, Text, TouchableHighlight, ViewStyle} from 'react-native';
import {COLORS} from '../../assets/colors';
import {styles} from './button.styles';

type Props = {
  onPress: () => void;
  disabled: boolean;
  title: string;
  style: ViewStyle;
};

const Button: React.FC<Props> = ({onPress, disabled, title, style}) => {
  return (
    <View style={style}>
      <TouchableHighlight
        disabled={disabled}
        onPress={onPress}
        underlayColor={COLORS.darkPrimary}
        style={[
          styles.defaultcontainer,
          {backgroundColor: disabled ? COLORS.gray : COLORS.primary},
        ]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
    </View>
  );
};
export default Button;
