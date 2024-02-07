import React from 'react';
import { TextInput as RNTextInput, TextInputProps, View, Text } from 'react-native';
import styles from './styles';

interface Props extends TextInputProps {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
}

const TextInput: React.FC<Props> = ({ label, placeholder, secureTextEntry, keyboardType, autoCapitalize, ...props }) => (
  <View style={{width:'100%'}}>
    <Text>{label == null ? placeholder:label}</Text>
    <RNTextInput
      style={styles.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      {...props}
    />
  </View>
);



export default TextInput;
