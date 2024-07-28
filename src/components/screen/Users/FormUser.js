import React, { useState } from "react";
import { Text, TextInput, Button, Card } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, Alert } from "react-native";
import { collection, addDoc } from "firebase/firestore";
import ConexionDB from "../../../ConexionDB";

const db = ConexionDB.db;

const FormUser = ({ route }) => {
  const navigation = useNavigation(); 
  const [nombre, setNombre] = useState("");
  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [perfil, setPerfil] = useState("");
  const [password, setPassword] = useState("");

  const addUser = async () => {
    if (nombre === "" || usuario === "" || email === "" || perfil === "" || password === "") {
      Alert.alert("Todos los campos son obligatorios");
      return;
    }

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
      Cancelar();
    } catch (e) {
      console.error("Error adding document: ", e);
      Alert.alert("Error al registrar usuario", e.message);
    }
  };

  const Cancelar = () => {
    setNombre("");
    setUsuario("");
    setEmail("");
    setPerfil("");
    setPassword("");
  };

  return (
    <View style={styles.contenedorPrincipal}>
      <View style={styles.contenedor2}>
        <Text style={styles.titulo}>Nuevo Usuario</Text>

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
      </View>

      <View style={styles.contenedorButton}>
        <Button
          theme={{ colors: { primary: "purple" } }}
          mode="contained"
          onPress={Cancelar}
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

      <View style={styles.contenedorTabla}>
        <Card mode="elevated" elevation={2}>
          <Text>Contenido del Card</Text>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorPrincipal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  contenedor2: {
    width: "80%",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  contenedorButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 10,
  },
  button: {
    marginHorizontal: 10,
  },
  input: {
    marginBottom: 10,
  },
  contenedorTabla: {
    marginTop: 20,
    width: "80%",
  },
});

export default FormUser;
