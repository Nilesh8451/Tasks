import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {styles} from '../../styles/styles';

export default class Screen3 extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Setting</Text>
      </View>
    );
  }
}
