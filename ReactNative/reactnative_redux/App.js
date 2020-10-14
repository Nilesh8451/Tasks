import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FoodForm from './routes/foodForm';
import FoodList from './routes/foodList';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="FoodForm"
          component={FoodForm}
          options={{
            title: 'Food Form',
            headerStyle: {backgroundColor: 'black'},
            headerTitleAlign: 'center',
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="FoodList"
          component={FoodList}
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
