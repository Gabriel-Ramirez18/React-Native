import React, { useState } from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { collection, addDoc } from "firebase/firestore";
import ConexionDB from "../../../ConexionDB"; 

const db = ConexionDB.db;

const Userdatos = () => {
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [perfil, setPerfil] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async () => {
    try {
      const docRef = await addDoc(collection(db, "Users"), {
        nombre,
        usuario,
        email,
        perfil,
        password,
      });
      console.log("Document written with ID: ", docRef.id);
      Alert.alert("Usuario registrado");
      cancelar();
    } catch (error) {
      console.error("Error adding document: ", error);
      Alert.alert("Error al registrar usuario", error.message);
    }
  };

  const cancelar = () => {
    setNombre("");
    setUsuario("");
    setEmail("");
    setPerfil("");
    setPassword("");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nuevo usuario</Text>

      <TextInput
        style={styles.input}
        label="Nombre"
        value={nombre}
        keyboardType="default"
        mode="outlined"
        onChangeText={setNombre}
      />

      <TextInput
        style={styles.input}
        label="Usuario"
        value={usuario}
        keyboardType="default"
        mode="outlined"
        onChangeText={setUsuario}
      />

      <TextInput
        style={styles.input}
        label="Email"
        value={email}
        keyboardType="email-address"
        mode="outlined"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        label="Perfil"
        value={perfil}
        keyboardType="default"
        mode="outlined"
        onChangeText={setPerfil}
      />

      <TextInput
        style={styles.input}
        label="Contraseña"
        value={password}
        secureTextEntry
        mode="outlined"
        onChangeText={setPassword}
      />

      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          theme={{ colors: { primary: "purple" } }}
          onPress={cancelar}
          style={styles.button}
        >
          Cancelar
        </Button>

        <Button
          icon="account-plus-outline"
          mode="contained"
          theme={{ colors: { primary: "purple" } }}
          onPress={addUser}
          style={styles.button}
        >
          Registrar Usuario
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default Userdatos;
