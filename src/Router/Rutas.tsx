import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';

import LoginPinScreen from '../screens/Login';
import ExpenseScreen from '../screens/Expense';
import ExpenseDetailsScreen from '../screens/ExpenseDetails';

// Auth
import RegisterScreen from '../screens/Auth/Register/RegisterScreen';
import LoginScreen from '../screens/Auth/Login/LoginScreen';

import HomeScreen from '../screens/Home/HomeScreen';
import MenuScreen from '../screens/Menu/MenuScreen';

import IndexExpensesScreen from '../screens/Expenses/IndexExpensesScreen';
import CreateExpenseScreen from '../screens/Expenses/CreateExpenseScreen';
import ShowExpenseScreen from '../screens/Expenses/ShowExpenseScreen';
import User from '../screens/User';
import SettingScreen from '../screens/Settings/SettingScreen';

import ExportToCSV from '../screens/Csv/ExportCsv';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabsHome() {
  return (
      <Tab.Navigator initialRouteName="CreateExpenseScreen">
       <Tab.Screen 
        name="IndexExpensesScreen" 
        component={IndexExpensesScreen} 
        options={{
          title: 'List Expenses',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" size={30} color="#000" />
          ),
        }}
      />
       <Tab.Screen 
        name="CreateExpenseScreen" 
        component={CreateExpenseScreen} 
        options={{
          title: 'Create Expense',
          tabBarIcon: ({ color, size }) => (
            <Icon name="plus" size={30} color="#000" />
          ),
        }}
      />
      <Tab.Screen 
        name="Menu" 
        component={MenuScreen} 
        options={{
          title: 'Menu',
          tabBarIcon: ({ color, size }) => (
            <Icon name="setting" size={30} color="#000" />
          ),
        }}
      />
      </Tab.Navigator>
  );
}

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
        <Stack.Screen name="Home" component={MyTabsHome} options={{ headerBackVisible: true, headerShown: false  }}/>

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
          options={{ title: 'Export/Import To CSV' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

export default Rutas;
