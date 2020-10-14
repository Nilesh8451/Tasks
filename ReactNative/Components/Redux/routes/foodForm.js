import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {connect} from 'react-redux';

import {addFood} from '../redux/actions/food';

function FoodForm({navigation, foods, addItem}) {
  const [food, setFood] = useState('');

  handleClick = () => {
    addItem(food);
    setFood('');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Redux Example</Text>
      <TextInput
        style={styles.input}
        value={food}
        placeholder="Food"
        onChangeText={(val) => setFood(val)}
      />
      <View style={styles.button}>
        <Button title="Submit" color="black" onPress={() => handleClick()} />
      </View>

      <View style={styles.button}>
        <Button
          title="Go to FoodList"
          color="black"
          onPress={() => {
            navigation.navigate('FoodList');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    marginVertical: 10,
  },
});

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foodList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (foodItem) => dispatch(addFood(foodItem)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodForm);
