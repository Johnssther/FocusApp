import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/AntDesign';


import LoginPinScreen from '../screens/Login';
import ExpenseScreen from '../screens/Expense';
import ExpenseDetailsScreen from '../screens/ExpenseDetails';

// Auth
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import LoginScreen from '../screens/Auth/Login/LoginScreen';

import HomeScreen from '../screens/Home/HomeScreen';

import IndexExpensesScreen from '../screens/Expenses/IndexExpensesScreen';
import CreateExpenseScreen from '../screens/Expenses/CreateExpenseScreen';
import ShowExpenseScreen from '../screens/Expenses/ShowExpenseScreen';
import User from '../screens/User';
import SettingScreen from '../screens/Settings/SettingScreen';

import ExportToCSV from '../screens/Csv/ExportCsv';


const Stack = createNativeStackNavigator();

function Rutas() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPin">
        <Stack.Screen
          name="LoginPin"
          component={LoginPinScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register' }}
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

export default Rutas;
