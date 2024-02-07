import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { gray } from '../../config/colors';
import TextInput from '../../components/TextInput/TextInput';
import { useExpensesActions } from '../../hooks/useExpensesActions'

import { generateUniqueId } from '../../utils/common'

import Button from '../../components/Button/Button';

const CreateExpenseScreen = ({navigation}) => {
  const [ quantity, setCount ] = useState(1);
  const [ name, setName ] = useState('');
  const [ unitPrice, setUnitPrice ] = useState(0);
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ justification, setJustification ] = useState('');

  const { storeHandleExpense } = useExpensesActions()

  const onRegister = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Añade un 0 al mes si es menor a 10
    const day = String(currentDate.getDate()).padStart(2, '0'); // Añade un 0 al día si es menor a 10

    const formattedDate = `${year}-${month}-${day}`;

    const expense = {
      id: generateUniqueId(),
      name,
      justification,
      receiptUrl: "https://example.com/receipts/expense2",
      quantity,
      unitPrice,
      totalPrice: totalPrice === 0 ? quantity*unitPrice: totalPrice,
      date: formattedDate,
      userId: 102,
      expenseTypeId: 1
    }
    storeHandleExpense(expense)
    navigation.navigate('IndexExpensesScreen')
  }

  return (
    <>
    <View style={styles.container}>
      <TextInput
        label='Quantity*'
        placeholder='Input Quantity'
        autoCapitalize='none'
        value={quantity}
        onChangeText={(quantity) => {setCount(parseInt(quantity))}}
        keyboardType='numeric'
        returnKeyType="next"
      />
      <TextInput
        label='Name'
        placeholder='Input Expense Name*'
        autoCapitalize='none'
        value={name}
        onChangeText={(name) => setName(name)}
        returnKeyType="next"
      />
      <TextInput
        label='Unit Amount'
        placeholder='Unit Amount*'
        autoCapitalize='none'
        value={unitPrice}
        onChangeText={(unitPrice) => setUnitPrice(parseInt(unitPrice))}
        keyboardType='numeric'
        returnKeyType="next"
      />
      <TextInput
        label='Justification'
        placeholder='justification of the expense*'
        autoCapitalize='none'
        value={justification}
        onChangeText={(justification) => setJustification(justification)}
        returnKeyType="next"
        multiline = {true}
        numberOfLines = {4}
      />
      <TextInput
        label='Total Amount'
        placeholder='Total Amount*'
        autoCapitalize='none'
        keyboardType='numeric'
        value={totalPrice}
        onChangeText={(totalPrice) => setTotalPrice(parseInt(totalPrice))}
      />
      
      <Button label='Guardar' onPress={() => onRegister()}></Button>
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
});

export default CreateExpenseScreen;
