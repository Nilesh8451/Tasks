import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/styles';

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Contacts</Text>
      </View>
    );
  }
}
