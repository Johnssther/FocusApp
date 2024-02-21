import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

function HomeScreen({navigation}: any) {
  return (
    <>
    <View style={styles.container}>
     <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('IndexExpensesScreen')}>
        <Text style={styles.item_text}>Mis Gastos</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('SettingScreen')}>
        <Text style={styles.item_text}>Settings</Text>
     </TouchableOpacity>
     <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('ExportToCSVs')}>
        <Text style={styles.item_text}>Export To CSV</Text>
     </TouchableOpacity>
    </View>
    {/* <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <View style={{marginTop:12}}>
         <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate('IndexExpensesScreen')}>
          <Text style={styles.loginButtonText}>Mis Gastos</Text>
        </TouchableOpacity>
     </View>
     <View style={{marginTop:12}}>
         <TouchableOpacity style={styles.loginButton}  onPress={() => navigation.navigate('SettingScreen')}>
          <Text style={styles.loginButtonText}>Settings</Text>
        </TouchableOpacity>
     </View>
    </View> */}
    </>
  );
}

export default HomeScreen;
