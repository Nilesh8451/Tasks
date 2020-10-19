import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Login from './login';
import Registration from './registration';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
/**
 * @author Nilesh Ganpat Chavan
 * @description This component handles routing between login and registration screen.
 * @returns Navigation jsx.
 */

function LoginReg() {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registration" component={Registration} />
    </Stack.Navigator>
  );
}

export default LoginReg;
