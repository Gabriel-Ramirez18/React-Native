import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, TouchableOpacity, Text } from 'react-native';
import { doc, updateDoc } from "firebase/firestore";
import ConexionDB from '../../../ConexionDB';

const db = ConexionDB.db;

const EditarUsuario = ({ route, navigation }) => {
  const { user } = route.params;
  const [nombre, setNombre] = useState(user.nombre);
  const [email, setEmail] = useState(user.email);
  const [perfil, setPerfil] = useState(user.perfil);

  const actualizarUsuario = async () => {
    try {
      await updateDoc(doc(db, "Users", user.id), {
        nombre,
        email,
        perfil
      });
      navigation.goBack();
    } catch (error) {
      console.error("Error actualizando el usuario: ", error);
      Alert.alert('Error', 'No se pudo actualizar el usuario');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Perfil"
        value={perfil}
        onChangeText={setPerfil}
      />
      <TouchableOpacity style={styles.button} onPress={actualizarUsuario}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 15,
    paddingLeft: 15,
    backgroundColor: '#f2f2f2',
  },
  button: {
    backgroundColor: 'purple',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditarUsuario;
