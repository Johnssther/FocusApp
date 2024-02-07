import { useState } from 'react'
import { View, Text } from 'react-native';
import styles from './styles';

import TextInput from '../../components/TextInput/TextInput';
import { useSettingsActions } from '../../hooks/useSettingsActions'
import Button from '../../components/Button/Button';

const SettingScreen = ({navigation}: any) => {
  const { setHandlePin } = useSettingsActions()
  const [ pin, setPin ] = useState<string>('');

  const onSave = () => {
    setHandlePin(pin)
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <TextInput
        label='Set a PIN to access the app.*'
        placeholder='Input Pin'
        autoCapitalize='none'
        onChangeText={(pin) => {setPin(pin)}}
        keyboardType='numeric'
        returnKeyType="next"
      />
      

    <Button label='Guardar' onPress={() => onSave()}></Button>

    <Text></Text>

    <Button label='ExportToCSV' onPress={() => navigation.navigate('ExportToCSVs') }></Button>
    
    </View>
  );
}

export default SettingScreen
