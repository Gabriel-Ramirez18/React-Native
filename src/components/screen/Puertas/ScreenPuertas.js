import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import ConexionDB from '../../../ConexionDB';
import { getDatabase, ref, get, update, child } from "firebase/database";

const ScreenPuertas = () => {
  const [datos, setDatos] = useState(null);
  const [statusInicial, setStatusInicial] = useState(null);

  const obtenerDatos = async () => {
    const db = getDatabase(ConexionDB.app);
    const referencia = ref(db);

    try {
      const snapshot = await get(child(referencia, "casa"));
      if (snapshot.exists()) {
        const datosObtenidos = snapshot.val();
        console.log("Datos obtenidos:", datosObtenidos);
        setDatos(datosObtenidos);
      } else {
        console.log("No se encontraron datos");
      }
    } catch (error) {
      console.error("Error obteniendo datos:", error);
    }
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  const cambiarStatusCocina = async (lugar, nuevoStatus) => {
    const db = getDatabase(ConexionDB.app);
    const referencia = ref(db, `casa/${lugar}`);

    try {
      await update(referencia, { status: nuevoStatus });
      console.log("Datos actualizados correctamente");
      obtenerDatos(); 
    } catch (error) {
      console.error("Error actualizando datos:", error);
    }
  };

  const cambiarEstadoPuerta = async () => {
    try {
      await cambiarStatusCocina("Puerta/sala", 1);
      setStatusInicial(1);

      setTimeout(async () => {
        await cambiarStatusCocina("Puerta/sala", 0);
        setStatusInicial(0);
      }, 2000);
    } catch (error) {
      console.error("Error cambiando estado de la puerta:", error);
    }
  };

  return (
    <View style={styles.container}>
      {datos ? (
        <>
          <Button
            contentStyle={styles.buttonContent}
            style={styles.spacedButton}
          >
            <Text>Luz Cocina: {datos.luz.cocina.status}</Text>
          </Button>

          <Button
            style={[styles.button, styles.spacedButton]}
            icon={datos.luz.cocina.status === 1 ? 'lightbulb-on' : 'lightbulb-off'}
            mode={datos.luz.cocina.status === 1 ? 'contained' : 'outlined'}
            onPress={() => cambiarStatusCocina('luz/cocina', datos.luz.cocina.status === 1 ? 0 : 1)}
          >
            Luz Cocina
          </Button>

          <Button
            style={styles.spacedButton}
            icon="door"
            mode="contained"
            onPress={cambiarEstadoPuerta}
          >
            Puerta
          </Button>
        </>
      ) : (
        <Text>Datos Cargando...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 30,
  },
  buttonContent: {
    paddingVertical: 90,
  },
  button: {
    marginTop: 15,
  },
  spacedButton: {
    marginVertical: 10,
  },
});

export default ScreenPuertas;
