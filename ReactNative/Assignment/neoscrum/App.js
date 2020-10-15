import React, {useState} from 'react';
import {View, Text} from 'react-native';
import LoginReg from './screens/loginReg';
import AddFeedback from './screens/addFeedback';
import Dashboard from './screens/dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  logoutHandler = () => {
    console.log('User is trying to logout');
  };

  createDashboardStack = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard',
            headerStyle: {backgroundColor: '#F1EFF1'},
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerLeft: () => (
              <FontAwesome5
                name={'bars'}
                color="black"
                solid
                size={20}
                style={{
                  marginLeft: 20,
                }}
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <FontAwesome5
                name={'sign-out-alt'}
                color="black"
                solid
                size={25}
                style={{
                  marginRight: 20,
                }}
                onPress={() => {
                  logoutHandler();
                }}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  createAddFeedbackStack = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="AddFeedback"
          component={AddFeedback}
          options={{
            title: 'Add Feedback',
            headerStyle: {backgroundColor: '#F1EFF1'},
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerLeft: () => (
              <FontAwesome5
                name={'bars'}
                color="black"
                solid
                size={20}
                style={{
                  marginLeft: 20,
                }}
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <FontAwesome5
                name={'sign-out-alt'}
                color="black"
                solid
                size={25}
                style={{
                  marginRight: 20,
                }}
                onPress={() => {}}
              />
            ),
          }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {loggedIn ? (
        <Drawer.Navigator>
          <Drawer.Screen
            name="DashboardDrawer"
            component={createDashboardStack}
            options={{title: 'Dashboard'}}
          />
          <Drawer.Screen
            name="AddFeedbackDrawer"
            component={createAddFeedbackStack}
            options={{title: 'Add Feedback'}}
          />
        </Drawer.Navigator>
      ) : (
        <LoginReg />
      )}
    </NavigationContainer>
  );
}

export default App;
