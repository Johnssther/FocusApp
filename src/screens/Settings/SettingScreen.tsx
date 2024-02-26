import { useState } from 'react'
import { View, Text } from 'react-native';
import styles from './styles';

import TextInput from '../../components/TextInput/TextInput';
import { useSettingsActions } from '../../hooks/useSettingsActions'
import Button from '../../components/Button/Button';
import { Main } from '../../components';

const SettingScreen = ({navigation}: any) => {
  const { setHandlePin } = useSettingsActions()
  const [ pin, setPin ] = useState<string>('');

  const onSave = () => {
    setHandlePin(pin)
    navigation.navigate('Home')
  }

  return (
    <Main>
      <View style={styles.card}>
        <TextInput
          label='Set a PIN to access the app.*'
          placeholder='Input Pin'
          autoCapitalize='none'
          onChangeText={(pin) => {setPin(pin)}}
          keyboardType='numeric'
          returnKeyType="next"
        /> 
        <Button label='Set PIN' onPress={() => onSave()}></Button>
      </View>
      <View style={styles.card}>
        <TextInput
          label='Choose a Home Screen'
          placeholder='Input Home Screen'
          autoCapitalize='none'
          returnKeyType="next"
        /> 
        <Button label='Set Screen' onPress={() => onSave()}></Button>
      </View>
    </Main>
  );
}

export default SettingScreen
