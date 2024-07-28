import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, Card, IconButton, useTheme } from 'react-native-paper';

const ScreenLuces = () => {
  const theme = useTheme();

  const handleDelete = () => {
    console.log('Eliminar');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>luz</Text>
        <View style={styles.buttonContainer}>
          <Button
            icon="lightbulb-on"
            mode="contained"
            onPress={() => console.log('Agregar Luces')}
            style={styles.button}
          >
            Agregar Luces
          </Button>
          <Button
            icon="update"
            mode="contained"
            onPress={() => console.log('Actualizar')}
            style={styles.button}
          >
            Actualizar
          </Button>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Card>
          <Card.Title title="Motor1" subtitle="Agua" left={(props) => <IconButton {...props} icon="lightbulb" />} />
          <Card.Content>
            <Text>Estado:</Text>
            <IconButton
              icon="toggle-switch"
              color={theme.colors.primary}
              size={20}
              onPress={() => console.log('Toggle Switch')}
            />
          </Card.Content>
          <Card.Actions>
            <Button icon="delete" mode="contained" onPress={handleDelete}>Eliminar</Button>
          </Card.Actions>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
    marginTop: 50, 
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    margin: 5,
  },
  cardContainer: {
    marginTop: 20,
  },
});

export default ScreenLuces;
