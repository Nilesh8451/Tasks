import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {
      name: 'Nilesh',
      age: '20',
      id: '1',
    },
    {
      name: 'Kamesh',
      age: '21',
      id: '2',
    },
    {
      name: 'Omkar',
      age: '19',
      id: '3',
    },
    {
      name: 'Akash',
      age: '22',
      id: '4',
    },
    {
      name: 'Chirag',
      age: '24',
      id: '5',
    },
    {
      name: 'Dinesh',
      age: '25',
      id: '6',
    },
    {
      name: 'Akshay',
      age: '24',
      id: '7',
    },
    {
      name: 'Saiesh',
      age: '24',
      id: '8',
    },
    {
      name: 'Anirudh',
      age: '24',
      id: '9',
    },
  ]);

  const pressHandler = (id) => {
    setPeople((prevState) => {
      return prevState.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <View style={styles.card}>
                <Text style={styles.boldText}>{item.name}</Text>
                <Text>{item.age}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    backgroundColor: 'pink',
    marginVertical: 10,
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
