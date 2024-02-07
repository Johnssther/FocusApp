import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../../hooks/store';
import { gray, black } from '../../config/colors';
import { useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import { formatDateHuman } from '../../utils/utils';

import { useExpensesActions } from '../../hooks/useExpensesActions'

const ShowExpenseScreen = ({navigation}) => {
  const { removeExpense } = useExpensesActions()

  const route = useRoute();
  const { expenseId } = route.params;

  const expenses = useAppSelector((state) => state.expenses);
  const expenseItem = expenses.find((expense) => expense.id === expenseId);
  const { id, name, justification, quantity, unitPrice, totalPrice, date } = expenseItem;

  const handleAddExpense = async () => {
    navigation.navigate('CreateExpenseScreen')
  }

  const handleRemoveExpense = async (id) => {
    navigation.navigate('IndexExpensesScreen')
    removeExpense(id)
  }

  if (!expenseItem) {
    // Si no se encontró ningún gasto con el ID proporcionado
    return (
      <View style={styles.container}>
        <Text>No se encontró ningún gasto con el ID proporcionado.</Text>
      </View>
    );
  }

  return (
    <>
    <View style={styles.container1}>
      <View style={styles.item1}>
        <Text style={styles.item1Name}>Name</Text>
        <Text style={styles.item1Value}>{ name }</Text>
      </View>
      <View style={styles.item1}>
        <Text style={styles.item1Name}>Quantity</Text>
        <Text style={styles.item1Value}>{ quantity }</Text>
      </View>
      <View style={styles.item1}>
        <Text style={styles.item1Name}>Date</Text>
        <Text style={styles.item1Value}>{ formatDateHuman(date) }</Text>
      </View>
      <View style={styles.item1}>
        <Text style={styles.item1Name}>Justification</Text>
        <Text style={styles.item1Value}>{ justification }</Text>
      </View>

      <View style={styles.item1}>
        <Text style={styles.item1Name}>Unit Price</Text>
        <Text style={styles.item1Value}>{unitPrice.toLocaleString('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}</Text>
      </View>
      <View style={styles.item1}>
        <Text style={styles.item1Name}>Total price</Text>
        <Text style={styles.item1Value}>{ totalPrice.toLocaleString('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }) } ({(unitPrice*quantity)})</Text>
      </View>
      <View style={styles.item1}>
        <Text style={styles.item1Name}>ID</Text>
        <Text style={styles.item1Value}>{ id }</Text>
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveExpense(id) }>
          <Icon name="delete" size={25} color="red" />
          <Text style={styles.deleteButtonText}>Eliminar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={() => handleAddExpense() }>
          <Icon name="plus" size={25} color="#fff" />
          <Text style={styles.loginButtonText}>Nuevo</Text>
        </TouchableOpacity>
      </View>

    </View>
    
    </>
  );
  
};

const styles = StyleSheet.create({
  container1: {
    height: '100%',
    flex: 1,
    justifyContent:'start',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  item1: {
    flexDirection: 'row',
    width: '90%',
    height: 60,
    justifyContent:'center',
    alignItems: 'center',
    gap: 10
  },
  item1Name: {
    width: '35%',
    fontSize: 18,
    color: gray[600]
  },
  item1Value: {
    width: '62%',
    fontSize: 18,
    color: black,
    flexDirection: 'row'
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white',
    flexDirection:'row',
    gap:5,
    width: '100%',

  },

  loginButton: {
    flexDirection:'row',
    gap: 5,
    backgroundColor: '#728242',
    
    borderRadius: 5,
    width: '40%',
    height: 50,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
  },
  loginButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  deleteButton: {
    flexDirection:'row',
    gap: 5,
    backgroundColor: '#f6aaaa',
    borderRadius: 5,
    width: '40%',
    height: 50,
    justifyContent: 'center', // Centrado vertical
    alignItems: 'center', // Centrado horizontal
  },
  deleteButtonText: {
    color: 'red',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default ShowExpenseScreen;
