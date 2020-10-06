import React, { Component, useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Nilesh");
  const [age, setAge] = useState("29");

  // const handleClick = (e) => {
  //   if (name === 'Nilesh') {
  //     setName('Kamesh');
  //   } else {
  //     setName('Nilesh');
  //   }
  // };

  return (
    <View style={styles.container}>
      {/* <View style={styles.mainDiv}>
        <Text style={styles.text}>My Name is {name}</Text>
        <Button title="Change" onPress={handleClick} />
      </View> */}

      <View style={styles.mainDiv}>
        <Text style={styles.text}>Enter Name: </Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Nilesh Chavan"
          maxLength={10}
          onChangeText={(val) => setName(val)}
        />

        <Text style={styles.text}>Enter Age: </Text>
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="e.g. Nilesh Chavan"
          onChangeText={(val) => setAge(val)}
        />

        <Text style={styles.text}>
          Name: {name} and Age: {age}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FAFAFA",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainDiv: {
    // width: '80%',
    marginBottom: 10,
    backgroundColor: "white",
  },
  text: {
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
