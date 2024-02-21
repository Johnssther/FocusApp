import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import styles from './styles';
import TextInput from '../../../components/TextInput/TextInput';
import Button from '../../../components/Button/Button';
import { useCreateUserMutation } from '../../../redux/apis/users/usersApi';

const RegisterScreen = ({navigation}:any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [createUser] = useCreateUserMutation()

  const sendData = async () => {
    try {
      const user = {
        name,
        email,
        username,
        password,
      }

      createUser(user)

      // Aquí puedes manejar la respuesta del servidor
      navigation.navigate('Login')
  
    } catch (error) {
      console.log(error, 'Error');
    }
  };

  return (
    <View style={styles.container}>

      <TextInput
          label='Name'
          placeholder='Input Name'
          autoCapitalize='none'
          onChangeText={(text) => {setName(text)}}
          returnKeyType="next" 
        />
      <TextInput
        label='Email'
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label='Usuario'
        placeholder="Usuario"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        label='Password'
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button label='Register' onPress={sendData}></Button>

    </View>
  );
};

export default RegisterScreen;
