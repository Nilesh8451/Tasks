import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import LoginStack from './screens/loginStack';
import RegisterStack from './screens/registrationStack';
import HomeStack from './screens/homeStack';
import ProfileStack from './screens/profileStack';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ProfileDrawer">
        <Drawer.Screen
          name="LoginDrawer"
          component={LoginStack}
          options={{title: 'Login'}}
        />
        <Drawer.Screen
          name="RegisterDrawer"
          component={RegisterStack}
          options={{title: 'Register'}}
        />
        <Drawer.Screen
          name="HomeDrawer"
          component={HomeStack}
          options={{title: 'Home'}}
        />
        <Drawer.Screen
          name="ProfileDrawer"
          component={ProfileStack}
          options={{title: 'MY Account'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
