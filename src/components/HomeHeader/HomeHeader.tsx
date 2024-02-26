import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface HomeHeaderProps {
  children: React.ReactNode;
}

const HomeHeader: React.FC<HomeHeaderProps> = () => {
  return (
    <View style={styles.container}>
      <Text>Home Header</Text>
    </View>
  );
};

export default HomeHeader;
