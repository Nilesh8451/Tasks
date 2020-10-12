import React from 'react';
import {View, Text} from 'react-native';

export default function ReviewDetails({route, navigation}) {
  const {title, rating, body} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{title}</Text>
      <Text>{rating}</Text>
      <Text>{body}</Text>
    </View>
  );
}
