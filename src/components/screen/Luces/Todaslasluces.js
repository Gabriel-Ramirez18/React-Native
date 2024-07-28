import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Button, Card, IconButton, useTheme } from 'react-native-paper';

const LeftContent = props => <IconButton {...props} icon="lightbulb" />

const Todaslasluces = ({ title, subtitle }) => (
  <Card style={styles.card}>
    <Card.Title title={title} subtitle={subtitle} left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">{title}</Text>
      <Text variant="bodyMedium">{subtitle}</Text>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
);

const ScreenLuces = () => {
  const theme = useTheme();

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
        <Todaslasluces title="Motor1" subtitle="Agua" />
        {}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
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
  card: {
    marginBottom: 20,
  },
});

export default ScreenLuces;
