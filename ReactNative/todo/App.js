import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AddTodo from './Components/addTodo';
import Header from './Components/header';
import SandBox from './Components/sandbox';
import TodoItem from './Components/todoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy Coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);
  const [count, setCount] = useState(3);

  const pressHandler = (key) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevState) => {
        return [{text: text, key: (count + 1).toString()}, ...prevState];
      });
      setCount((prevCount) => {
        return prevCount + 1;
      });
    } else {
      Alert.alert('OOPS!', 'TODOS MUST BE OVER 3 CHAR LONG ', [
        {text: 'Understood', onPress: () => console.log('Alert Closed')},
      ]);
    }
  };

  return (
    // <SandBox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => {
                return <TodoItem item={item} pressHandler={pressHandler} />;
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    // backgroundColor: 'pink',
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: 'yellow',
  },
});
