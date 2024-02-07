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


const requestReadPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: 'Permiso de lectura en almacenamiento externo',
        message: 'La aplicación necesita permiso para leer en el almacenamiento externo.',
        buttonNeutral: 'Preguntar más tarde',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permiso de lectura en almacenamiento externo concedido');
    } else {
      console.log('Permiso de lectura en almacenamiento externo denegado');
    }
  } catch (err) {
    console.warn(err);
  }
};

// Llama a esta función en algún lugar de tu código para solicitar el permiso.

const requestWritePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Permiso de escritura en almacenamiento externo',
        message: 'La aplicación necesita permiso para escribir en el almacenamiento externo.',
        buttonNeutral: 'Preguntar más tarde',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Permiso de escritura en almacenamiento externo concedido');
    } else {
      console.log('Permiso de escritura en almacenamiento externo denegado');
    }
  } catch (err) {
    console.warn(err);
  }
};

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
      
      console.log(result);
      
     


      // Get the content of the selected file

      console.log( res.pickDirectory );
      


      // Actualizar el estado con los datos CSV
    } catch (error) {
      console.error('Error al importar el archivo CSV:', error);
    }
  };

  const _importFromDownloads = async () => {
    try {
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
      );
  
      if (!hasPermission) {
        // Si no tienes permisos, solicita permisos
        await requestReadPermission();
      }
      
      const filename = namefile;

      const downloadsDir = RNFS.DownloadDirectoryPath;
      
      const filePath = `${downloadsDir}/${filename}.csv`;

      const fileExists = await RNFS.exists(filePath);
      if (fileExists) {
        Alert.alert(`El archivo CSV ya existe en la carpeta de descargas:`, `${filePath}`);
      } else {
        Alert.alert(`El archivo CSV NO EXISTE:`, `${filePath}`);
      }

      console.log(filePath, '------');


      const csvData = await RNFS.readFile(filePath, 'utf8');
      // Aquí puedes procesar los datos del archivo CSV como desees
      // console.log('Datos del archivo CSV:', convertCSVDataToExpenseObjects(csvData) );


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


    } catch (error) {
      console.error('Error al importar datos desde el archivo CSV:', error);
      Alert.alert('Error', 'Error al importar datos desde el archivo CSV, verifique que exista el nombre del archivo');
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
    <>
    <View style={styles.container}>

    <TextInput
        label='Name Export File'
        placeholder='Input NameFile'
        autoCapitalize='none'
        onChangeText={(namefile) => {setNamefile(namefile)}}
        returnKeyType="next" 
      />

      <Button label='Export Data To CSV' onPress={() => _exportToDownloads()}></Button>

      <Text></Text>

      <Button label='Import Data To CSV' onPress={() => importCSV()}></Button>

    </View>
    </>
  );
};

export default ExportToCSV;
