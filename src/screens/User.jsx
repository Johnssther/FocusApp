import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

const UserScreen = () => {

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      {
        users.map((user) => {
          return(
            <View style={styles.flag} key={user.id}>
              <Text style={styles.title}>{user.name}</Text>
              <Text style={styles.title}>{user.email}</Text>
              <Text style={styles.title}>{user.github}</Text>
              <View style={{marginTop:12}}>
                  <TouchableOpacity style={styles.loginButton}  onPress={ () => {} }>
                    <Text style={styles.loginButtonText}>Eliminar</Text>
                  </TouchableOpacity>
              </View>
            </View>
          );
        })
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white',
  },
  flag: {
    backgroundColor: '#4f46e5',
    padding:15,
    width: '100%',
    marginBottom: 5,
    borderRadius: 14,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
    loginButton: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    width: 120,
    height: 40,
    marginTop: 12,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
  },
  loginButtonText: {
    color: '#f99797',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default UserScreen;
