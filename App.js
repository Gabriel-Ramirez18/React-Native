import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginP1 from './src/components/screen/Login/LoginP1'
import Loginp2 from './src/components/screen/Login/Loginp2';
import MenuPrincipal from './src/components/screen/Home/MenuPrincipal';
import Navegation from './src/components/Navegation';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
   
  <Navegation/>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   textAlign:"center",
    backgroundColor: "#CDCDCD",
  },
});