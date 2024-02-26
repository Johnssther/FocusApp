import React, { useState } from 'react';
import { Alert, View, Text, PermissionsAndroid } from 'react-native';
import RNFS from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';

import { useAppSelector } from '../../hooks/store';
import { getDate } from '../../utils/common';
import styles from './styles';
import Button from '../../components/Button/Button';
import TextInput from '../../components/TextInput/TextInput';
import { Expense } from '../../@types/Expense';

import { useExpensesActions } from '../../hooks/useExpensesActions';
import { generateUniqueId } from '../../utils/common'


const ExportToCSV = ({navigation}: any) => {
  const [ namefile, setNamefile ] = useState<string>('');

  const expenses = useAppSelector((state) => state.expenses);
  const { storeAllHandleExpenses } = useExpensesActions()

  const _exportToDownloads = async () => {
    const data = expenses;

    const csvData = [
      Object.keys(data[0]).join(','), // Headers
      ...data.map(item => Object.values(item).join(','))
    ].join('\n');
    
    const filename = namefile;
    try {
      // Crear el directorio de descargas si no existe
      const downloadsDir = RNFS.DownloadDirectoryPath;
      await RNFS.mkdir(downloadsDir);
  
      // Verificar si el archivo ya existe
      const filePath = `${downloadsDir}/${filename}.csv`;
      
      const fileExists = await RNFS.exists(filePath);
  
      if (fileExists) {
        Alert.alert(`El archivo CSV ya existe en la carpeta de descargas:`, `${filePath}`);
      } else {
        // Crear y escribir en el archivo CSV
        await RNFS.writeFile(filePath, csvData, 'utf8');
        Alert.alert(`'Archivo CSV exportado correctamente a la carpeta de descargas:'`, `${filePath}`);
      }
    } catch (error) {
      console.error('Error al exportar archivo CSV:', error);
    }
  };


  const importCSV = async () => {
    try {
      const result = await DocumentPicker.pick();
      const csvData = await RNFS.readFile(result[0].uri, 'utf8');
      const expenses = convertCSVDataToExpenseObjects(csvData);

      Alert.alert(
        'Desea importar desde el archivo CSV',
        csvData,
        [
          {
            text: 'Cancelar',
            style: 'cancel'
          },
          {
            text: 'Continuar',
            onPress: () => {

              storeAllHandleExpenses(expenses)
              // Aquí puedes agregar el código para continuar con la acción deseada después de importar los datos
              console.log('Datos importados correctamente desde el archivo CSV:');

              Alert.alert('Datos importados correctamente desde el archivo CSV');

              navigation.navigate('IndexExpensesScreen');
              
            }
          }
        ],
        { cancelable: false }
      );

    

      // Actualizar el estado con los datos CSV
    } catch (error) {
      console.error('Error al importar el archivo CSV:', error);
    }
  };

  const convertCSVDataToExpenseObjects = (csvData: string): Expense[] => {
    const rows: string[] = csvData.split('\n');

    const expenses:Expense[] = rows.slice(1).map((row: string) => {
      const columns: string[] = row.split(',');
      let expense:Expense = {
        id: generateUniqueId(),
        name: columns[1].trim(),
        justification: columns[2].trim(),
        receiptUrl: columns[3].trim(),
        quantity: parseInt(columns[4].trim()),
        unitPrice: parseInt(columns[5].trim()),
        totalPrice: parseInt(columns[6].trim()),
        date: columns[7].trim(),
        userId: parseInt(columns[8].trim()),
        expenseTypeId: parseInt(columns[9].trim()),
       }
      return expense;
    })

    return expenses;
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Text style={styles.title}>Export Data</Text>
        <TextInput
          label='Name Export File'
          placeholder='Input NameFile'
          autoCapitalize='none'
          onChangeText={(namefile) => {setNamefile(namefile)}}
          returnKeyType="next" 
        />
        <Button label='Export Data To CSV' onPress={() => _exportToDownloads()}></Button>
      </View>

      <View style={styles.items}>
        <Text style={styles.title}>Import Data</Text>

        <Button label='importCSV Pick' onPress={() => importCSV()}></Button>
      </View>
    </View>
  );
};

export default ExportToCSV;
