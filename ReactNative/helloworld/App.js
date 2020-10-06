import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const width_proportion = '50%';

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <View style={style.innerContainer}>
          <Text style={style.heading}>Hello World!!</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  innerContainer: {
    width: '60%',
    backgroundColor: 'pink',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  heading: {
    fontSize: 25,

    textAlign: 'center',
  },
});
