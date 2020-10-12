import React from 'react';
import ReviewDetails from '../routes/ReviewDetails';
import Home from '../routes/Home';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Stack = createStackNavigator();

createHomeStack = ({navigation}) =>
<Stack.Navigator initialRouteName="Home">
  <Stack.Screen
    name="Home"
    component={Home}
    options={{
      title: 'My Home Screen',
      headerStyle: { backgroundColor: 'black' },
      headerTitleAlign: 'center',
      headerTintColor: 'white',
      headerLeft:()=>(
        <FontAwesome5 name={'bars'} color='white' solid size={20} style={{
          marginLeft:20
        }}  backgroundColor='white' onPress={()=>navigation.openDrawer()} />
      )
    }}
  />
  <Stack.Screen
    name="Details"
    component={ReviewDetails}
    options={{
      headerStyle: { backgroundColor: 'black' },
      headerTitleAlign: 'center',
      headerTintColor: 'white',
     
    }}
  />
</Stack.Navigator>

export default createHomeStack