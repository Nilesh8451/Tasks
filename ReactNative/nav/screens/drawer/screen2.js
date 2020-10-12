import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/styles';

export default class Screen2 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Favourites</Text>
      </View>
    );
  }
}
