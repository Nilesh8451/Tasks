import React, {Component} from 'react';
import Feed from './feed';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Screen1 from './screens/drawer/screen1';
import Screen2 from './screens/drawer/screen2';
import Screen3 from './screens/drawer/screen3';
import Details from './details';
import Tab1 from './screens/tabs/tab1';
import Tab2 from './screens/tabs/tab2';
import Tab3 from './screens/tabs/tab3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{
          title: 'MY FEED',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Details}
        options={{
          title: 'Details',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Bottom Tabs"
        children={this.createBottonTabs}
        options={{
          title: 'MY BottomNav',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
      <Stack.Screen
        name="Top Tabs"
        children={this.createTopTabs}
        options={{
          title: 'MY TopNav',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: 'white',
        }}
      />
    </Stack.Navigator>
  );

  createTopTabs = () => {
    return (
      <MaterialTopTabs.Navigator>
        <MaterialTopTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{title: 'New Title'}}
        />
        <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialTopTabs.Navigator>
    );
  };

  createBottonTabs = (props) => {
    return (
      <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen
          name="Tab 1"
          component={Tab1}
          options={{title: props.route.params.name}}
        />
        <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
        <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
      </MaterialBottomTabs.Navigator>
    );
  };
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={this.createHomeStack} />
          <Drawer.Screen name="Contacts" component={Screen1} />
          <Drawer.Screen name="Favorites" component={Screen2} />
          <Drawer.Screen name="Setting" component={Screen3} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
