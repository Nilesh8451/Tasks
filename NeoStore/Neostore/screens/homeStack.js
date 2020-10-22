import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../routes/home';
import {View, Text} from 'react-native';
import Cart from '../routes/cart';
const Stack = createStackNavigator();

function HomeStack({navigation}) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: 'NeoSTORE',
          headerStyle: {
            backgroundColor: '#2874F0',
            // borderBottomWidth: 0,
            elevation: 0,
          },
          // FF0000
          // 2874F0
          // headerTitleAlign: 'center',
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
          headerRight: () => (
            <View
              style={{
                // backgroundColor: 'pink',
                paddingVertical: 10,
              }}>
              <FontAwesome5
                name={'shopping-cart'}
                color="white"
                solid
                size={20}
                style={{
                  marginRight: 25,
                }}
                onPress={() => {
                  // logoutHandler();
                  navigation.navigate('Cart');
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  left: 22,
                  top: -3,
                  backgroundColor: 'red',
                  padding: 1,
                  //   width: 20,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: 'white',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 12,
                    padding: 2,
                    paddingHorizontal: 4,
                  }}>
                  2
                </Text>
              </View>
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerStyle: {
            backgroundColor: '#2874F0',
            // borderBottomWidth: 0,
            elevation: 0,
          },

          headerRight: () => (
            <View
              style={{
                // backgroundColor: 'pink',
                paddingVertical: 10,
              }}>
              <FontAwesome5
                name={'shopping-cart'}
                color="white"
                solid
                size={20}
                style={{
                  marginRight: 25,
                }}
                onPress={() => {
                  // logoutHandler();
                }}
              />
              <View
                style={{
                  position: 'absolute',
                  left: 22,
                  top: -3,
                  backgroundColor: 'red',
                  padding: 1,
                  //   width: 20,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: 'white',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 12,
                    padding: 2,
                    paddingHorizontal: 4,
                  }}>
                  2
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeStack;
