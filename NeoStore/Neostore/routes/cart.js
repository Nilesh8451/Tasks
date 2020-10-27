import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  Image,
} from 'react-native';

import {Rating} from 'react-native-ratings';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

function Cart() {
  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      rating: 3,
      product_name: 'Nokia Lumia 400',
      product_price: 40000,
    },
    {
      id: 2,
      rating: 5,
      product_name: 'Mou Bed With Mattress',
      product_price: 20000,
    },
    {
      id: 3,
      rating: 4.5,
      product_name: 'IPhone 12',
      product_price: 80000,
    },
    {
      id: 4,
      rating: 3,
      product_name: 'Freedom 251',
      product_price: 251,
    },
    {
      id: 5,
      rating: 4,
      product_name: 'Macbock Pro',
      product_price: 70000,
    },
    {
      id: 6,
      rating: 1.5,
      product_name: 'Macbock Pro2',
      product_price: 70000,
    },
  ]);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          // backgroundColor: 'yellow',
          marginHorizontal: 10,
          marginVertical: 10,
        }}>
        <FlatList
          data={allProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableWithoutFeedback
                key={item.id}
                onPress={() => {
                  console.log('Clicked on Card');
                }}>
                <View style={styles.productCardContent}>
                  <View style={styles.productCard}>
                    <View style={{width: 100, height: 100}}>
                      <Image
                        source={require('../assets/images/food-banner2.jpg')}
                        style={styles.cardImage}
                      />
                    </View>
                    <View style={styles.cardDetail}>
                      <Text
                        // numberOfLines={1}
                        style={{
                          fontSize: 20,
                          marginRight: 30,
                          // backgroundColor: 'red',
                        }}>
                        {item.product_name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{fontSize: 16, marginTop: 2}}>
                        Quantity: 1
                      </Text>
                      <View
                        style={{
                          marginTop: 10,
                          // backgroundColor: 'red',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontSize: 20,
                            color: '#FE5555',
                            // marginTop: 10,
                          }}>
                          {item.product_price}
                        </Text>
                        <View style={styles.cartItemAction}>
                          <View
                            style={{
                              // width: 30,
                              height: '100%',
                              padding: 5,
                              paddingHorizontal: 9,
                              // borderRadius: 30,
                              justifyContent: 'center',
                              backgroundColor: '#F0F0F0',
                              marginRight: 2,
                              borderRightWidth: 1,
                              borderRightColor: 'gray',
                            }}>
                            <FontAwesome5
                              name={'minus'}
                              color={'black'}
                              solid
                              size={18}
                              style={{opacity: 0.7}}
                              onPress={() => {}}
                            />
                          </View>
                          <View
                            style={{
                              height: '100%',
                              padding: 5,
                              paddingHorizontal: 9,
                              // borderRadius: 30,
                              justifyContent: 'center',
                              backgroundColor: '#F0F0F0',
                              marginRight: 2,
                              borderRightWidth: 1,
                              borderRightColor: 'gray',
                            }}>
                            <Text style={{fontWeight: 'bold', fontSize: 18}}>
                              1
                            </Text>
                          </View>
                          <View
                            style={{
                              // width: 30,
                              height: '100%',
                              padding: 5,
                              paddingHorizontal: 9,
                              // borderRadius: 30,
                              justifyContent: 'center',
                              backgroundColor: '#F0F0F0',
                            }}>
                            <FontAwesome5
                              name={'plus'}
                              color={'black'}
                              solid
                              size={18}
                              style={{opacity: 0.7}}
                              onPress={() => {}}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      top: 20,
                      right: 10,
                    }}>
                    <FontAwesome5
                      name={'trash-alt'}
                      color={'black'}
                      solid
                      size={18}
                      style={{opacity: 0.7}}
                      onPress={() => {
                        console.log('Deleted');
                      }}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
  },

  productCardContainer: {
    // backgroundColor: 'white',
    marginBottom: 20,
  },
  productCardContent: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  productCard: {
    paddingVertical: 15,

    // backgroundColor: 'pink',
    flexDirection: 'row',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    // marginLeft: 10,
  },
  cardDetail: {
    // backgroundColor: 'red',
    width: '68%',
    marginLeft: 20,
  },
  cartItemAction: {
    // backgroundColor: 'yellow',
    width: 110,
    height: 36,
    // paddingHorizontal: 20,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Cart;
