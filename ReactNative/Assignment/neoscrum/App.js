import React, {useEffect, useState} from 'react';
import LoginReg from './screens/loginReg';
import AddFeedback from './screens/addFeedback';
import Dashboard from './screens/dashboard';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DrawerContent from './screens/drawerContent';
import {connect} from 'react-redux';
import {signout} from './redux/action/signOutAction';
import {restoreLoginData} from './redux/action/loginAction';
import {Alert, AsyncStorage} from 'react-native';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

/**
 * @author Nilesh Ganpat Chavan
 * @description This is the main component which handles the content to show on the screen.This component
 * contain rounting between different screens.Based on user is logged in or not its shows different screens.
 * If the user is logged in then dashboard is display in the home screen alogn with drawer to toggle between
 * different available screens.
 * @returns This component return Navigation Container which contains different Screens
 */

function App({user, signout, restoreData}) {
  logoutHandler = () => {
    // console.log('User is trying to logout');
    Alert.alert('Warning!', 'Are you sure you want to signout', [
      {
        text: 'NO',
      },
      {text: 'YES', onPress: () => signout()},
    ]);
  };

  const restoreUserInfo = async () => {
    try {
      const user = await AsyncStorage.getItem('userInfo');
      const parseUserData = await JSON.parse(user);
      console.log('While Fetching Again', parseUserData.token);
      if (user !== null) {
        console.log('Successfulluy fetch user info', parseUserData);
        restoreData(parseUserData);
      }
    } catch (error) {
      // Error saving data
    }
  };

  useEffect(() => {
    restoreUserInfo();
    console.log('NEw Data', user.token);
  }, []);

  createDashboardStack = ({navigation}) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard',
            headerStyle: {backgroundColor: 'white'},
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
            headerStyle: {backgroundColor: 'white'},
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

  return (
    <NavigationContainer>
      {console.log('Inside Return', user.token)}
      {user.token ? (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
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

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
    restoreData: (user) => dispatch(restoreLoginData(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
