import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const [reviews, setReviews] = useState([
    {title: 'Hera Pheri is Awesome', rating: 5, body: 'lorem ipsum', key: '1'},
    {
      title: 'Hera Pheri is Awesome 2',
      rating: 4,
      body: 'lorem ipsum',
      key: '2',
    },
    {
      title: 'Hera Pheri is Awesome 3',
      rating: 3,
      body: 'lorem ipsum',
      key: '3',
    },
  ]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
      }}>
      <FlatList
        data={reviews}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', item)}>
            <Text
              style={{
                marginTop: 10,
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
