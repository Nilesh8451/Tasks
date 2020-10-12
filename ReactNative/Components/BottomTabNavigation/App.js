import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AuthorD from './routes/authorD';
import createHomeStack from './screens/HomeStack';
import createReviewStack from './screens/ReviewStack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Noti from './routes/Noti';

const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
 const TabScreen = ()=>
  <Tab.Navigator
      activeColor="#e91e63"
      shifting='true'
      style={{ backgroundColor: 'tomato' }}
    >
      <Tab.Screen
        name="Author"
        component={AuthorD}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:'yellow',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Noti}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'#d02860',
          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notificati"
        component={Noti}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'pink',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notific"
        component={Noti}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:'pink',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>


const createBottomTabStack = ({navigation})=>
<Stack.Navigator>
<Stack.Screen
  name="Tabs"
  component={TabScreen}
  options={{
    title: 'My Tab Screen',
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

function App() {




  return (
    <NavigationContainer>

      <Drawer.Navigator >
        <Drawer.Screen name="Home" children={createHomeStack} />
        <Drawer.Screen name="Reviews" children={createReviewStack} />
        <Drawer.Screen name="Author" component={AuthorD} />
        <Drawer.Screen name="Tabs" children={createBottomTabStack} />
      </Drawer.Navigator>

    </NavigationContainer>
  );
}

export default App;
