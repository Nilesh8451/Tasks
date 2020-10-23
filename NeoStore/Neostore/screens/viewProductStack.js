import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import ViewProduct from '../routes/viewProduct';
import ProductDetail from '../routes/productDetail';
const Stack = createStackNavigator();

function ViewProductStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={{
          title: 'Products',
          headerStyle: {backgroundColor: '#2874F0'},
          headerTintColor: 'white',
          headerLeft: () => (
            <FontAwesome5
              name={'bars'}
              color="white"
              solid
              size={20}
              style={{
                marginLeft: 20,
              }}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={
          //   {
          //   title: 'ProductName',
          //   headerStyle: {backgroundColor: '#2874F0'},
          //   headerTintColor: 'white',
          // }
          ({route}) => ({
            title: route.params.product_name,
            headerStyle: {backgroundColor: '#2874F0'},
            headerTintColor: 'white',
          })
        }
      />
    </Stack.Navigator>
  );
}

export default ViewProductStack;
