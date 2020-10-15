import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Login from './login';
import Registration from './registration';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function LoginReg() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default LoginReg;
