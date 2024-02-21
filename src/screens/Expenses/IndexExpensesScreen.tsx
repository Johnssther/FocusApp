import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { gray } from '../../config/colors';
import { formatDateHuman } from '../../utils/utils';

import { useAppSelector } from '../../hooks/store';

const IndexExpensesScreen = ({navigation}: any) => {
  const expenses = useAppSelector((state) => state.expenses);
  console.log(expenses);
  
  const handleItemClick = (expenseId: number) => {
    navigation.navigate('ShowExpenseScreen', { expenseId })
  }

  const total = (array:any = []) => {
    return array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.totalPrice;
    }, 0);
  }

  const renderItem = ({ quantity, name, totalPrice, id, date }:any) => {
    return (    
      <View>
        <TouchableOpacity onPress={() => handleItemClick(id)}>
        <View style={styles.flag}>
          <View style={styles.containerExpense}>
            <Text style={styles.expense}>{quantity} {name.length > 40 ? name.slice(0, 40) + '...' : name}</Text>
            <Text style={styles.price}>
              {totalPrice.toLocaleString('es-CO', {
                style: 'currency',
                currency: 'COP',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </Text>
          </View>
          <Text style={styles.date}>{formatDateHuman(date)}</Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.totalPrice}>
        Total: {total(expenses).toLocaleString('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
      <Text>{expenses.length} Expenses</Text>
      <FlatList
        data={expenses}
        renderItem={({ item }) => renderItem(item)}
        showsVerticalScrollIndicator={false}
      />
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'white',
  },
  flag: {
    backgroundColor: 'white',
    padding:5,
    width: '100%',
    marginBottom: 5,
    borderRadius: 14,
    height: 62,
    justifyContent: 'center',
    paddingLeft: 9,
  },
  containerExpense: {
    display: 'flex',
    flexDirection: 'row',
  },
  expense: {
    color: '#4b5563',
    fontSize: 18,
    fontWeight: 'bold',
    width:'70%',
  },
  totalPrice: {
    color: 'red',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    color: gray[700],
    fontSize: 18,
    fontWeight: 'bold',
    width:'30%',
    textAlign: 'right',
  },
  date: {

  },
  loginButton: {
    backgroundColor: '#a52b2b',
    padding: 10,
    borderRadius: 5,
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
    fontSize: 18,
  },
});

export default IndexExpensesScreen;
