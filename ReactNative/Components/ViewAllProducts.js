import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LottieView from 'lottie-react-native';
import CustomModal from '../shared/modal';
import FlatButton from '../shared/button';

function ViewProduct() {
  const [popularProd, setPopularProd] = useState([
    {
      id: 1,
      product_name: 'Some Product Name',
      product_price: 40000,
    },
    {
      id: 2,
      product_name: 'Some Product Name',
      product_price: 40000,
    },
    {
      id: 3,
      product_name: 'Some Product Name',
      product_price: 40000,
    },
    {
      id: 4,
      product_name: 'Some Product Name',
      product_price: 40000,
    },
    {
      id: 5,
      product_name: 'Some Product Name',
      product_price: 40000,
    },
  ]);

  const [isLoading, setIsLoading] = useState(true);
  const [recentClicked, setRecentClicked] = useState('');
  const [openCategoryModal, setOpenCategoryModal] = useState(false);
  const [openColorModal, setOpenColorModal] = useState(false);
  const [colorVal, setColorVal] = useState('');
  const [categoryVal, setCategoryVal] = useState('');
  const [colors] = useState([
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#607d8b',
  ]);

  const [categories, setCategories] = useState([
    'Sofa',
    'Bed',
    'Chair',
    'Table',
    'Almirah',
  ]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <View
        style={{
          ...styles.container,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LottieView
          source={require('../assets/json/loader2.json')}
          autoPlay
          style={{
            // backgroundColor: 'red',
            width: 200,
            height: 200,
          }}
          loop
        />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={
            {
              //   flex: 1,
              // paddingVertical: 60,
              // backgroundColor: 'pink',
            }
          }>
          <View
            style={{
              flex: 1,
              // backgroundColor: 'yellow',
              marginHorizontal: 10,
              marginVertical: 10,
            }}>
            {popularProd.map((product, index) => (
              <TouchableWithoutFeedback
                key={product.id}
                onPress={() => {
                  console.log('Clicked on Card');
                }}>
                <View style={styles.productCardContent}>
                  <View style={styles.productCard}>
                    <ImageBackground
                      source={require('../assets/images/food-banner1.jpg')}
                      style={{
                        width: '100%',
                        height: '100%',
                        // borderRadius: 20,
                      }}
                      resizeMode={'cover'}
                      borderRadius={6}
                      imageStyle={{}}>
                      <View
                        style={{
                          flex: 1,
                          borderRadius: 6,
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: index % 2 ? 'flex-start' : 'flex-end',
                          backgroundColor: 'rgba( 0, 0, 0, 0.5 )',
                          shadowColor: '#000',
                          shadowOffset: {
                            width: 0,
                            height: 3,
                          },
                          shadowOpacity: 0.27,
                          shadowRadius: 4.65,

                          elevation: 3,
                        }}>
                        <View
                          style={{
                            marginLeft: index % 2 && 30,
                            marginRight: index % 2 ? 0 : 30,
                            alignItems: index % 2 ? 'flex-start' : 'flex-end',
                            maxWidth: 200,
                          }}>
                          <Text
                            style={{fontSize: 21, color: 'white'}}
                            numberOfLines={1}>
                            Spaghetii Marinara1
                          </Text>
                          <Text style={{fontSize: 15, color: 'white'}}>
                            Rs. 40,000
                          </Text>
                        </View>
                      </View>
                    </ImageBackground>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>

        <CustomModal
          open={openCategoryModal}
          setOpen={setOpenCategoryModal}
          title="Select Category"
          setClickedVal={setCategoryVal}>
          <View
            style={{
              height: 130,
              borderWidth: 1,
              borderColor: 'gray',
              marginTop: 10,
              paddingVertical: 5,
            }}>
            <ScrollView style={{flex: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                {categories.map((category) => (
                  <TouchableOpacity
                    key={category}
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      console.log('Setting a color with id', category);
                      setCategoryVal(category);
                    }}>
                    <View
                      style={{
                        width: '90%',

                        backgroundColor:
                          categoryVal === category
                            ? '#2874F0'
                            : 'rgba(0,0,0,0.1)',
                        marginBottom: 10,
                        borderWidth: 1.5,
                        borderColor: '',
                      }}>
                      <Text
                        style={{
                          marginLeft: 10,
                          paddingVertical: 8,
                          fontSize: 15,
                          color: categoryVal === category ? 'white' : 'black',
                        }}>
                        {category}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
          <View style={{marginTop: 10}}>
            <FlatButton
              title="FILTER"
              disabled={!categoryVal}
              color={!categoryVal ? 'gray' : '#2874F0'}
              onPress={() => {
                console.log('CLicked with category id of', categoryVal);
                setColorVal('');
                setOpenCategoryModal(false);
              }}
            />
          </View>
        </CustomModal>

        <View style={styles.bottomActionView}>
          <View style={styles.bottomActionContent}>
            <TouchableWithoutFeedback
              onPress={() => {
                console.log('clicked on Category');
                setOpenCategoryModal(true);
                setRecentClicked('Category');
              }}>
              <View style={styles.bottomActionContentBox}>
                <FontAwesome5
                  name={'list'}
                  color={recentClicked === 'Category' ? 'blue' : 'black'}
                  solid
                  size={20}
                  style={{}}
                />
                <Text
                  style={{
                    color: recentClicked === 'Category' ? 'blue' : 'black',
                  }}>
                  Category
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <CustomModal
              open={openColorModal}
              setOpen={setOpenColorModal}
              title="Select Color"
              setClickedVal={setColorVal}>
              <View
                style={{
                  height: 130,
                  // backgroundColor: 'pink',
                  borderWidth: 1,
                  borderColor: 'gray',
                  marginTop: 10,
                  paddingVertical: 5,
                }}>
                <ScrollView style={{flex: 1}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    {colors.map((color) => (
                      <TouchableOpacity
                        key={color}
                        onPress={() => {
                          console.log('Setting a color with colorCode', color);
                          setColorVal(color);
                        }}>
                        <View
                          style={{
                            width: !(colorVal === color) ? 45 : 50,
                            height: !(colorVal === color) ? 25 : 30,
                            // backgroundColor: 'rgba(0,0,0,0.1)',
                            backgroundColor: color,
                            marginRight: 10,
                            marginBottom: 10,
                            borderWidth: 1.5,
                            borderWidth: !(colorVal === color) ? 1 : 3,
                          }}></View>
                      </TouchableOpacity>
                    ))}
                  </View>
                </ScrollView>
              </View>
              <View style={{marginTop: 10}}>
                <FlatButton
                  title="FILTER"
                  disabled={!colorVal}
                  color={!colorVal ? 'gray' : '#2874F0'}
                  onPress={() => {
                    console.log('CLicked with color id of', colorVal);
                    setOpenColorModal(false);
                  }}
                />
              </View>
            </CustomModal>

            <TouchableWithoutFeedback
              onPress={() => {
                console.log('clicked on Palette');
                setOpenColorModal(true);
                setRecentClicked('Palette');
              }}>
              <View style={styles.bottomActionContentBox}>
                <FontAwesome5
                  name={'palette'}
                  color={recentClicked === 'Palette' ? 'blue' : 'black'}
                  solid
                  size={20}
                  style={{}}
                />
                <Text
                  style={{
                    color: recentClicked === 'Palette' ? 'blue' : 'black',
                  }}>
                  Color
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                console.log('clicked on Ascending');
                setRecentClicked('Ascending');
              }}>
              <View style={styles.bottomActionContentBox}>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesome5
                    name={'rupee-sign'}
                    color={recentClicked === 'Ascending' ? 'blue' : 'black'}
                    solid
                    size={14}
                    style={{}}
                  />
                  <FontAwesome5
                    name={'arrow-down'}
                    color={recentClicked === 'Ascending' ? 'blue' : 'black'}
                    solid
                    size={20}
                    style={{}}
                  />
                </View>

                <Text
                  style={{
                    color: recentClicked === 'Ascending' ? 'blue' : 'black',
                  }}>
                  Ascending
                </Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                console.log('clicked on Descending');
                setRecentClicked('Descending');
              }}>
              <View style={styles.bottomActionContentBox}>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesome5
                    name={'rupee-sign'}
                    color={recentClicked === 'Descending' ? 'blue' : 'black'}
                    solid
                    size={14}
                    style={{}}
                  />
                  <FontAwesome5
                    name={'arrow-up'}
                    color={recentClicked === 'Descending' ? 'blue' : 'black'}
                    solid
                    size={20}
                    style={{}}
                  />
                </View>
                <Text
                  style={{
                    color: recentClicked === 'Descending' ? 'blue' : 'black',
                  }}>
                  Descending
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'orange',
  },
  productCardContent: {
    // backgroundColor: 'white',
    // backgroundColor: 'red',
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  productCard: {
    // paddingVertical: 15,
    // backgroundColor: 'pink',
    // borderRadius: 20,
    flexDirection: 'row',
    height: 120,
  },
  bottomActionView: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  bottomActionContent: {
    width: '95%',
    // backgroundColor: 'pink',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomActionContentBox: {
    width: '24%',
    height: '100%',
    // backgroundColor: 'yellow',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ViewProduct;
