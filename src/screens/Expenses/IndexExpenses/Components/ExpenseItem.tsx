import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { formatDateHuman } from '../../../../utils/utils';
import { gray } from '../../../../Constants/Colors';

type Props = {
  quantity:number, 
  name:string, 
  totalPrice:number, 
  id:number, 
  date:number, 
  navigation:any
}

const ExpenseItem = (props: Props) => {
  const {quantity, name, totalPrice, id, date, navigation} = props;
  
  const handleItemClick = (expenseId: number) => {
    navigation.navigate('ShowExpenseScreen', { expenseId })
  };

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
};

const styles = StyleSheet.create({
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
  date: {},
});

export default ExpenseItem;
