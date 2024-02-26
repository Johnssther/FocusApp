import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

export default Main;
