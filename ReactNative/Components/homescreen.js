import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Swiper from "react-native-swiper";
import { Rating, AirbnbRating } from "react-native-ratings";

import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
function Home() {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          // flex: 1,
          // paddingVertical: 60,
          backgroundColor: "pink",
        }}
      >
        <View style={styles.searchBox}>
          <View
            style={{
              marginBottom: 12,
              // flexDirection: 'column',
              marginHorizontal: 5,
            }}
          >
            <FontAwesome5
              name={"search"}
              color={"black"}
              // backgroundColor="black"
              solid
              size={21}
              style={{
                position: "absolute",
                left: 14,
                top: 22,
                opacity: 0.5,
                zIndex: 1,
              }}
              onPress={() => handleEyeClick()}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              // value={formikProps.values.email}
              // onChangeText={formikProps.handleChange('email')}
              // onBlur={formikProps.handleBlur('email')}
            />
          </View>
        </View>
        <View style={{ width: "100%", backgroundColor: "#2874F0" }}>
          <View style={styles.sliderContainer}>
            <Swiper
              autoplay
              horizontal={true}
              height={200}
              activeDotColor="#FF6347"
            >
              <View style={styles.slide}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/food-banner1.jpg")}
                    resizeMode="cover"
                    style={styles.sliderImage}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.slide}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/food-banner2.jpg")}
                    resizeMode="cover"
                    style={styles.sliderImage}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.slide}>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/food-banner3.jpg")}
                    resizeMode="cover"
                    style={styles.sliderImage}
                  />
                </TouchableOpacity>
              </View>
            </Swiper>
          </View>
        </View>

        <View style={styles.popularProducts}>
          <View style={styles.popularProductsHeader}>
            <Text style={{ fontSize: 18 }}>Popular Products</Text>
            <Text style={{ fontSize: 17, marginTop: 10 }}>View All</Text>
          </View>

          <View style={styles.productCardContainer}>
            <TouchableWithoutFeedback
              onPress={() => {
                console.log("Clicked on Card");
              }}
            >
              <View style={styles.productCardContent}>
                <View style={styles.productCard}>
                  <View style={{ width: 100, height: 100 }}>
                    <Image
                      source={require("../assets/images/food-banner2.jpg")}
                      style={styles.cardImage}
                    />
                  </View>
                  <View style={styles.cardDetail}>
                    <Text numberOfLines={1} style={{ fontSize: 22 }}>
                      Robinson
                    </Text>
                    <Text numberOfLines={1} style={{ fontSize: 16 }}>
                      Matte
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginRight: 30,
                      }}
                    >
                      <Rating
                        ratingCount={5}
                        startingValue={3.5}
                        imageSize={20}
                        readonly={true}
                      />
                    </View>

                    <Text style={{ fontSize: 20, color: "#FE5555" }}>
                      Rs. 40000
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                console.log("Clicked on Card");
              }}
            >
              <View style={styles.productCardContent}>
                <View style={styles.productCard}>
                  <View style={{ width: 100, height: 100 }}>
                    <Image
                      source={require("../assets/images/food-banner2.jpg")}
                      style={styles.cardImage}
                    />
                  </View>
                  <View style={styles.cardDetail}>
                    <Text numberOfLines={1} style={{ fontSize: 22 }}>
                      Robinson
                    </Text>
                    <Text style={{ fontSize: 16 }}>Matte</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginRight: 30,
                      }}
                    >
                      <Rating
                        ratingCount={5}
                        startingValue={3.5}
                        imageSize={20}
                        readonly={true}
                      />
                    </View>

                    <Text style={{ fontSize: 20, color: "#FE5555" }}>
                      Rs. 40000
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                console.log("Clicked on Card");
              }}
            >
              <View style={styles.productCardContent}>
                <View style={styles.productCard}>
                  <View style={{ width: 100, height: 100 }}>
                    <Image
                      source={require("../assets/images/food-banner2.jpg")}
                      style={styles.cardImage}
                    />
                  </View>
                  <View style={styles.cardDetail}>
                    <Text numberOfLines={1} style={{ fontSize: 22 }}>
                      Robinson
                    </Text>
                    <Text style={{ fontSize: 16 }}>Matte</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginRight: 30,
                      }}
                    >
                      <Rating
                        ratingCount={5}
                        startingValue={3.5}
                        imageSize={20}
                        readonly={true}
                      />
                    </View>

                    <Text style={{ fontSize: 20, color: "#FE5555" }}>
                      Rs. 40000
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback
              onPress={() => {
                console.log("Clicked on Card");
              }}
            >
              <View style={styles.productCardContent}>
                <View style={styles.productCard}>
                  <View style={{ width: 100, height: 100 }}>
                    <Image
                      source={require("../assets/images/food-banner2.jpg")}
                      style={styles.cardImage}
                    />
                  </View>
                  <View style={styles.cardDetail}>
                    <Text numberOfLines={1} style={{ fontSize: 22 }}>
                      Robinson
                    </Text>
                    <Text style={{ fontSize: 16 }}>Matte</Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginRight: 30,
                      }}
                    >
                      <Rating
                        ratingCount={5}
                        startingValue={3.5}
                        imageSize={20}
                        readonly={true}
                      />
                    </View>

                    <Text style={{ fontSize: 20, color: "#FE5555" }}>
                      Rs. 40000
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  searchBox: {
    backgroundColor: "#2874F0",
    // backgroundColor: 'red',
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "gray",
    marginTop: 7,
    padding: 10,
    paddingHorizontal: 12,
    fontSize: 17,
    paddingLeft: 43,
    paddingRight: 40,
    borderRadius: 2,
  },

  sliderContainer: {
    height: 200,
    width: "98%",
    // paddingTop: 10,
    marginBottom: 5,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 3,
  },

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },

  popularProducts: {
    // flex: 1,
    backgroundColor: "#F1F3F6",
    // backgroundColor: 'red',
  },
  popularProductsHeader: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 13,
    backgroundColor: "white",
  },
  productCardContainer: {
    // backgroundColor: 'white',
    marginBottom: 20,
  },
  productCardContent: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  productCard: {
    paddingVertical: 15,

    // backgroundColor: 'pink',
    flexDirection: "row",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    // marginLeft: 10,
  },
  cardDetail: {
    // backgroundColor: 'red',
    width: "68%",
    marginLeft: 20,
  },
});

export default Home;
