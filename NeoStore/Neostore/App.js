import React from 'react';

import {View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Login from './screens/login';
import Registration from './screens/registration';

function App() {
  return (
    <View>
      <Login />
      {/* <Registration /> */}
      {/* <Icon name="rocket" size={30} color="#900" /> */}
    </View>
  );
}

export default App;
