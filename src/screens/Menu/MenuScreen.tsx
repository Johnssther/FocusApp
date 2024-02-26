import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { Main } from "../../components/index";
import Icon from 'react-native-vector-icons/AntDesign';

function MenuScreen({navigation}: any) {
  return (
   <Main>
      <View style={styles.container}>
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('IndexExpensesScreen')}>
            <Icon name="arrowup" size={32} color="#000" />
            <Text style={styles.item_text}>My Expenses</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} disabled={true}>
            <Icon name="arrowdown" size={32} color="#cccccc" />
            <Text style={[styles.item_text, styles.item_textD]}>My Incomes</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} disabled={true}>
            <Icon name="bars" size={32} color="#cccccc" />
            <Text style={[styles.item_text, styles.item_textD]}>My Budget</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.container}>
         <TouchableOpacity style={styles.item} disabled={true}>
            <Icon name="profile" size={32} color="#cccccc" />
            <Text style={[styles.item_text, styles.item_textD]}>Box</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ExportToCSVs')}>
            <Icon name="export" size={32} color="#000" />
            <Text style={styles.item_text}>Export To CSV</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('SettingScreen')}>
            <Icon name="setting" size={32} color="#000" />
            <Text style={styles.item_text}>Settings</Text>
         </TouchableOpacity>
      </View>
      <View style={styles.container}>
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Login')}>
            <Icon name="logout" size={32} color="#000" />
            <Text style={styles.item_text}>Logout</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('LoginPin')}>
            <Icon name="lock1" size={32} color="#000" />
            <Text style={styles.item_text}>Lock</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.item}>
            
         </TouchableOpacity>
      </View>
   </Main>
  );
}

export default MenuScreen;
