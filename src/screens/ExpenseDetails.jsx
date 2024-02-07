import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

const ExpenseDetailsScreen = () => {
  const expenses = useSelector((state) => state.expenses);

  return (
    <>
    <View style={styles.container}>
      <Text>Aqui va el detalle del gasto</Text>
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
    backgroundColor:'#f1f5f9',
  },
  flag: {
    backgroundColor: 'white',
    padding:5,
    width: '100%',
    marginBottom: 5,
    borderRadius: 14,
    height: 70,
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
  price: {
    color: '#4b5563',
    fontSize: 18,
    fontWeight: 'bold',
    width:'30%',
    textAlign: 'right',
  },
  date: {

  },
});

export default ExpenseDetailsScreen;
