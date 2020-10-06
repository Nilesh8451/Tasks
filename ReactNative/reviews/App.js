import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './components/home';
import {globalStyles} from './assets/styles/globalStyles';

export default function App() {
  return (
    <View style={globalStyles.container}>
      <Home />
    </View>
  );
}
