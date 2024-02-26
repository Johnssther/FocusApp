import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import TextInput from "../../../components/TextInput/TextInput";
import styles from './styles';
import Icon from 'react-native-vector-icons/AntDesign';

import { useAppSelector } from '../../../hooks/store';

const LoginScreen = ({navigation}:any) => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ secureTextEntry, setSecureTextEntry ] = useState(true);
  
  const setting = useAppSelector((state) => state.settings);

  const onLogin = () => {
    if(setting.pin !== null) {
      if (setting.pin === password) {
        navigation.navigate('Home')
      } else {
        Alert.alert('Pin Incorrecto', `Por favor ingresa el pin de acceso que configuró en la app`);
      }
    } else {
      navigation.navigate('Home')
    }
  }

  return (
    <ScrollView>
    <View style={styles.containerMain}>
      <View style={styles.containerLogo}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lAPuoHrir3zg3pPyloaeqJTyHz86aap828iyaWBQOx_mmv-MEDMlVbF4sTJ-om22nis&usqp=CAU' }}
        style={styles.image}
      />
        <Text style={styles.title}>Konachcoin</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          placeholder='Email'
          keyboardType='email-address'
          autoCapitalize='none'
          value={username}
          onChangeText={(username) => setUsername(username)}
        />

        <TextInput
          placeholder='Password'
          keyboardType='numeric'
          secureTextEntry={secureTextEntry}
          onChangeText={(password) => setPassword(password)}
        />
        {/* <TouchableOpacity style= Register forgotPasswordContainer} onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Text style={styles.forgotPasswordText}>Ver contraseña</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.loginButton} onPress={() => onLogin() }>
          <Icon name="logout" size={23} color="#fff" />
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Or login with</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButtonGoogle}>
          <Text style={styles.loginButtonGoogleText}>Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotRegisterContainer} onPress={() => {  navigation.navigate('Register') } }>
          <Text style={styles.forgotRegisterText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

export default LoginScreen;
