import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './routes/Home';
import ReviewDetails from './routes/ReviewDetails';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My Home Screen',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Details"
          component={ReviewDetails}
          options={{
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
