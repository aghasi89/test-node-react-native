import React from 'react';
import {View, Text, ViewStyle, TextInput} from 'react-native';
import {COLORS} from '../../assets/colors';
import {styles} from './input.styles';

type Props = {
  value?: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  style?: ViewStyle;
  label?: string;
  hasError?: boolean;
  errorMessage: string;
};

const Input: React.FC<Props> = ({
  value,
  onChangeText,
  placeholder,
  style,
  label,
  errorMessage,
  hasError = false,
}) => {
  return (
    <View style={style}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.container]}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={styles.input}
          placeholderTextColor={COLORS.gray200}
        />
      </View>
      {<Text style={styles.error}>{hasError && errorMessage}</Text>}
    </View>
  );
};
export default Input;
