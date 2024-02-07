import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';


import LoginScreen from '../screens/Login';
import ExpenseScreen from '../screens/Expense';
import ExpenseDetailsScreen from '../screens/ExpenseDetails';

import IndexExpensesScreen from '../screens/Expenses/IndexExpensesScreen';
import CreateExpenseScreen from '../screens/Expenses/CreateExpenseScreen';
import ShowExpenseScreen from '../screens/Expenses/ShowExpenseScreen';
import User from '../screens/User';
import SettingScreen from '../screens/Settings/SettingScreen';

import ExportToCSV from '../screens/Csv/ExportCsv';


import { slate } from '../config/colors';

function HomeScreen({navigation}: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <View style={{marginTop:12}}>
         <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate('IndexExpensesScreen')}>
          <Text style={styles.loginButtonText}>Mis Gastos</Text>
        </TouchableOpacity>
     </View>
     <View style={{marginTop:12}}>
         <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate('SettingScreen')}>
          <Text style={styles.loginButtonText}>Settings</Text>
        </TouchableOpacity>
     </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Rutas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerBackVisible: false }}/>

        <Stack.Screen
          name="IndexExpensesScreen"
          component={IndexExpensesScreen}
          options={({ navigation }) => ({
            title: 'Expenses',
            headerRight: () => (
              <>
                <TouchableOpacity style={{backgroundColor:'white', padding:5, borderRadius:50}} onPress={() => { navigation.navigate('CreateExpenseScreen')}}>
                  <Icon name="plus" size={30} color="#000" />
                </TouchableOpacity>
              </>
            ),
          })}
        />
         <Stack.Screen
          name="CreateExpenseScreen"
          component={CreateExpenseScreen}
          options={{ title: 'Crear/Editar gasto' }}
        />
         <Stack.Screen
          name="ShowExpenseScreen"
          component={ShowExpenseScreen}
          options={{ title: 'Details' }}
        />
         <Stack.Screen
          name="User"
          component={User}
          options={{ title: 'User' }}
        />
         <Stack.Screen
          name="SettingScreen"
          component={SettingScreen}
          options={{ title: 'Setting' }}
        />
         <Stack.Screen
          name="ExportToCSVs"
          component={ExportToCSV}
          options={{ title: 'Export To CSV' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    width: 180,
    height: 70,
    marginTop: 12,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CreateExpenseScreen;


export default Rutas;
