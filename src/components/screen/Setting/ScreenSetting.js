import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from "firebase/auth";

const ScreenSetting = () => {
  const navegacion = useNavigation();

  const cerrarsesion = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        Alert.alert('Aviso', 'Sesión cerrada correctamente');
        navegacion.navigate('Login');
      })
      .catch((error) => {
        console.error('Error cerrando la sesión: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Acerca de la</Text>
      <Text style={styles.text}>Versión 1.1</Text>
      <Button
        style={styles.button}
        theme={{ colors: { primary: 'purple' } }}
        icon="logout"
        mode="contained"
        onPress={cerrarsesion}
      >
        Cerrar sesión
      </Button>
    </View>
  );
};

export default ScreenSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});
