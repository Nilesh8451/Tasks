import React from 'react';
import Reviews from '../routes/Reviews';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Stack = createStackNavigator();
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

export default createReviewStack