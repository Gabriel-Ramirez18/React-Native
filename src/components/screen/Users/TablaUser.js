import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { DataTable, IconButton } from 'react-native-paper';
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { useNavigation } from '@react-navigation/native';
import ConexionDB from '../../../ConexionDB';

const db = ConexionDB.db;

const TablaUser = () => {
  const [datos, setDatos] = useState([]);
  const navigation = useNavigation();

  const obtenerDatosUser = async () => {
    try {
      const users = [];
      const querySnapshot = await getDocs(collection(db, "Users"));
      querySnapshot.forEach((doc) => {
        const { nombre, email, perfil } = doc.data();
        users.push({
          id: doc.id,
          nombre,
          email,
          perfil,
        });
      });
      setDatos(users);
    } catch (error) {
      console.error("Error al obtener los datos: ", error);
    }
  };

  useEffect(() => {
    obtenerDatosUser();
  }, []);

  const eliminarUsuario = (id) => {
    Alert.alert(
      "Confirmar eliminación",
      "¿Estás seguro de que deseas eliminar este usuario?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Eliminar",
          onPress: async () => {
            try {
              await deleteDoc(doc(db, "Users", id));
              obtenerDatosUser();
            } catch (error) {
              console.error("Error eliminando el usuario: ", error);
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  const editarUsuario = (user) => {
    navigation.navigate('EditarUsuario', { user });
  };

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Usuario</DataTable.Title>
          <DataTable.Title>Email</DataTable.Title>
          <DataTable.Title>Perfil</DataTable.Title>
          <DataTable.Title style={styles.actionsColumn}>Acciones</DataTable.Title>
        </DataTable.Header>

        {datos.map((item) => (
          <DataTable.Row key={item.id}>
            <DataTable.Cell>{item.nombre}</DataTable.Cell>
            <DataTable.Cell>{item.email}</DataTable.Cell>
            <DataTable.Cell>{item.perfil}</DataTable.Cell>
            <DataTable.Cell style={styles.actionsColumn}>
              <View style={styles.iconContainer}>
                <IconButton
                  icon="pencil-outline"
                  size={20}
                  onPress={() => editarUsuario(item)}
                />
                <IconButton
                  icon="delete-outline"
                  size={20}
                  onPress={() => eliminarUsuario(item.id)}
                />
                <IconButton
                  icon="eye-outline"
                  size={20}
                  onPress={() => console.log("Ver usuario", item.id)}
                />
              </View>
            </DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  actionsColumn: {
    flex: 2,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default TablaUser;
