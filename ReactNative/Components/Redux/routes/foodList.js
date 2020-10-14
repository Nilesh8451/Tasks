import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';

import {connect} from 'react-redux';
import {deleteFood} from '../redux/actions/food';

function FoodList({foods, deleteItem}) {
  const [food, setFood] = useState('');
  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        keyExtractor={(item, index) => item.key}
        renderItem={(data) => {
          return (
            <TouchableOpacity
              onPress={() => deleteItem(data.item.key)}
              style={styles.itemDiv}>
              <Text>{data.item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  itemDiv: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: 'pink',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'gray',
  },
});

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foodList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (key) => dispatch(deleteFood(key)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodList);
