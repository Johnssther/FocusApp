import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import styles from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <TouchableOpacity style={styles.button} {...props}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
