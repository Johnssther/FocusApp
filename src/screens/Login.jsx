import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import TextInput from '../components/TextInput/TextInput';
import { SCREEN_HEIGHT } from '../utils/common';

import { useSelector } from 'react-redux';
import { useAppSelector } from '../hooks/store';

const LoginScreen = ({navigation}) => {
  const [ password, setPassword ] = useState('');
  
  const userAuth = useSelector((state) => state.userAuth);
  const setting = useAppSelector((state) => state.settings);

  const onLogin = () => {
    console.log(setting);
    setPassword('')
    if(setting !== null) {
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
        <Text style={styles.title}>Enter Pin</Text>
      </View>
      <View style={styles.container}>

        <TextInput
          label=''
          placeholder='Enter Pin'
          keyboardType='numeric'
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword(password)}
        />
        {/* <TouchableOpacity style= Register forgotPasswordContainer} onPress={() => setSecureTextEntry(!secureTextEntry)}>
          <Text style={styles.forgotPasswordText}>Ver contraseña</Text>
        </TouchableOpacity> */}

        <TouchableOpacity style={styles.loginButton} onPress={() => onLogin() }>
          <Text style={styles.loginButtonText}>Unlook</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.forgotRegisterContainer} onPress={() => {  navigation.navigate('Login') } }>
          <Text style={styles.forgotRegisterText}>Forgot Pin?</Text>
        </TouchableOpacity>

      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: 'white',
    height: SCREEN_HEIGHT
  },
  image: {
    width: 128, // Ancho deseado de la imagen
    height: 128, // Altura deseada de la imagen
    borderRadius: 100, // Para redondear la imagen (la mitad del ancho o altura)
    objectFit: 'cover',
    
  },
  containerLogo: {
    height: 260,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#ffffff',
  },
  title: {
    fontSize: 39,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  loginButton: {
    backgroundColor: '#36b436',
    padding: 10,
    borderRadius: 35,
    width: '100%',
    height: 50,
    marginTop: 12,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  loginButtonGoogle: {
    padding: 10,
    borderRadius: 35,
    width: '100%',
    height: 50,
    marginTop: 12,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
    borderWidth: 1,
    borderColor: '#bcabab',
  },
  loginButtonGoogleText: {
    color: '#3b82f6',
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  forgotPasswordContainer: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: '#8d7f7f',
  },

  forgotRegisterContainer: {
    marginTop: 16,
  },
  forgotRegisterText: {
    color: '#3b3be5',
    fontSize: 18,
    fontWeight: 'bold'
  },

  

});

export default LoginScreen;
