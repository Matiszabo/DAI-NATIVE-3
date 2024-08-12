import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import EventoImage from './../../assets/eventos/evento300.png';
import TaylorSwiftImage from './../../assets/eventos/Taylor.jpg';
import bocaJuniorsImage from './../../assets/eventos/bocaJuniors.png'

// Mapeo de nombres de eventos a imágenes
const eventImages = {
  'Taylor Swift': TaylorSwiftImage,
  'Boca Juniors': bocaJuniorsImage
  // Agrega más eventos y sus imágenes aquí
};

const EventosDetalle = ({ route }) => {
  const { evento } = route.params;
  
  // Selecciona la imagen según el nombre del evento
  const imageSource = eventImages[evento.name] || EventoImage;

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.imagen} />
      <Text style={styles.name}>{evento.name}</Text>
      <Text style={styles.description}>{evento.description}</Text>
      <Text style={styles.start_date}>{evento.start_date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imagen: {
    width: 300,
    height: 300,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  start_date: {
    fontSize: 14,
    color: '#666',
  },
});

export default EventosDetalle;
