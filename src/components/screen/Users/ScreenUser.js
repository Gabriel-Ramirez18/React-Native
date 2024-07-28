import { Alert, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from "firebase/firestore";
import ConexionDB from '../../../ConexionDB';
import TablaUser from './TablaUser';

const ScreenUser = () => {
  const db = ConexionDB.db;
  const navigation = useNavigation();
  const [datos, setDatos] = useState([]);

  const obtenerDatos = async () => {
    try {
      const users = [];
      const querySnapshot = await getDocs(collection(db, "Users"));
      querySnapshot.forEach((doc) => {
        const { email, nombre, perfil } = doc.data();
        users.push({
          id: doc.id,
          email,
          nombre,
          perfil,
        });
      });
      setDatos(users);
      console.log(users);
    } catch (error) {
      console.error("Error al obtener los datos: ", error);
      Alert.alert("Error", "Hubo un problema al obtener los datos.");
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen User</Text>
      <Button 
        icon="account-plus" 
        mode="contained" 
        onPress={() => navigation.navigate('Userdatos')}
      >
        Agregar Usuario
      </Button>
      <TablaUser datos={datos} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  }
});

export default ScreenUser;
