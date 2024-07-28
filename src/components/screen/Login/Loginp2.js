import React, { useState } from 'react';
import { StyleSheet, View, Alert, ScrollView } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import ModelUser from './ModelUser';

const Loginp2 = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [verPassword, setVerPassword] = useState(true);

  const ingresarUsuario = () => {
    if (user === '') {
      Alert.alert('El campo de usuario no debe de estar vacío');
    } else if (password === '') {
      Alert.alert('El campo de password no debe de estar vacío');
    } else {
      Alert.alert(`Usuario: ${user}`, `Password: ${password}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>HOLA</Text>
      <Text style={styles.subtitle}>Iniciar sesión</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          label="Usuario"
          value={user}
          onChangeText={setUser}
          keyboardType='default'
          mode="outlined"
        />

        <TextInput
          style={styles.input}
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={verPassword}
          mode="outlined"
        />

        <Button 
          theme={{ colors: { primary: '#C469D8' } }} 
          style={styles.button} 
          icon="login" 
          mode="contained" 
          onPress={ingresarUsuario}
        >
          Ingresar
        </Button>
      </View>

      <ModelUser />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 120, 
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20,
    color: '#555',
  },
  inputContainer: {
    width: '100%',
    maxWidth: 400,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  input: {
    marginBottom: 20,
    width: '100%',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    width: '100%',
  },
});

export default Loginp2;
