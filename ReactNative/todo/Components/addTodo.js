import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function AddTodo({submitHandler}) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const submitHandlerBtn = (todoText) => {
    if (todoText.length > 3) {
      setText('');
    }

    submitHandler(todoText);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        placeholder="new Todo..."
        onChangeText={(val) => changeHandler(val)}
      />

      <Button
        onPress={() => submitHandlerBtn(text)}
        title="add todo"
        color="coral"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
