import React from 'react';
import {View, Text} from 'react-native';
import Card from '../shared/card';

export default function ReviewDetails({route, navigation}) {
  const {title, rating, body} = route.params;
  return (
    <View>
      <Card>
        <Text>{title}</Text>
        <Text>{rating}</Text>
        <Text>{body}</Text>
      </Card>
    </View>
  );
}
