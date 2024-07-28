import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import ConexionDB from '../../../ConexionDB'; 

const LoginP1 = () => {
  const auth = getAuth(ConexionDB.app);

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const crearCuenta = () => {
    createUserWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Cuenta creada", `Usuario: ${user.email}`);
        console.log(user);
      })
      .catch((error) => {
        Alert.alert("Error al crear cuenta", error.message);
        console.log(error);
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        const user = userCredential.user;
        Alert.alert("Bienvenido", `Usuario: ${user.email}`);
        console.log(user);
      })
      .catch((error) => {
        Alert.alert("Error al iniciar sesión", error.message);
        console.log(error);
      });
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>HOLA</Text>
      <Text style={styles.titulo2}>Iniciar sesión</Text>

      <View style={styles.contenedorInput}>
        <TextInput
          onChangeText={setUser}
          style={styles.input}
          placeholder="USUARIO"
          keyboardType="default"
          autoCapitalize="none"
          value={user}
        />
        <TextInput
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          placeholder="PASSWORD"
          keyboardType="default"
          value={password}
        />

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.button} onPress={login}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={crearCuenta}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginP1;

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#CDCDCD',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 53,
    color: 'black',
    fontWeight: 'bold',
  },
  titulo2: {
    fontSize: 20,
    textAlign: 'center',
  },
  contenedorInput: {
    padding: 15,
  },
  input: {
    marginTop: 15,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  button: {
    width: 250,
    padding: 10,
    marginTop: 25,
    backgroundColor: '#C469D8',
    borderRadius: 15,
  },
});
