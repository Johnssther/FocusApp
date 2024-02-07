import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { slate, gray } from '../config/colors';

const ExpenseScreen = ({navigation}) => {
  const expenses = useSelector((state) => state.expenses);

  const handleItemClick = () => {
    navigation.navigate('ExpenseDetails')
  };

  const renderItem = ({ quantity, name, totalPrice }) => (
    <TouchableOpacity onPress={() => handleItemClick()}>
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
      <Text style={styles.date}>8 dic, 2023</Text>
    </View>
    </TouchableOpacity>
  );

  return (
    <>
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(expense) => expense.id}
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
    color: gray[700],
    fontSize: 18,
    fontWeight: 'bold',
    width:'30%',
    textAlign: 'right',
  },
  date: {

  },
});

export default ExpenseScreen;
