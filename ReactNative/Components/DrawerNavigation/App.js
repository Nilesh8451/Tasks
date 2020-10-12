import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './routes/Home';
import ReviewDetails from './routes/ReviewDetails';
import Reviews from './routes/Reviews';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AuthorD from './routes/authorD';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {

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


createReviewStack = ({navigation}) =>
    <Stack.Navigator>
      <Stack.Screen
        name="Reviews"
        component={Reviews}
        options={{
          title: 'My Review Screen',
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
    
    </Stack.Navigator>

  return (
    <NavigationContainer>

      <Drawer.Navigator >
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Reviews" children={createReviewStack} />
        <Drawer.Screen name="Author" component={AuthorD} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;
