import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import EventosService from './../services/eventosServices.js';

//Importar imagenes
import EventoImage from './../../assets/eventos/evento150.png'
import TaylorSwiftImage from './../../assets/eventos/Taylor.jpg'


const eventImages = {
  'Taylor Swift': TaylorSwiftImage,
  // Agrega más eventos y sus imágenes aquí
};

const EventoItem = ({ evento, onPress }) => {
  const imageSource = eventImages[evento.name] || EventoImage;

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.imagen} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{evento.name}</Text>
        <Text style={styles.description} numberOfLines={2}>{evento.description}</Text>
        <Text style={styles.start_date}>{evento.start_date}</Text>
      </View>
    </TouchableOpacity>
  );
};

const EventosHome = ({ navigation }) => {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    // Obtengo el Array de Eventos.
    const fetchedEventos = EventosService.getAll();
    setEventos(fetchedEventos);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={eventos}
        renderItem={({ item }) => (
          <EventoItem
            evento={item}
            onPress={() => navigation.navigate('Detalle', { evento: item })}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#E8F4F8',
  },
  flatListContent: {
    width: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  imagen: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginTop: 4,
  },
  start_date: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
  },
});

export default EventosHome;