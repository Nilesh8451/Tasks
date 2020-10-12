import React, {useState} from 'react';
import {View, Text} from 'react-native';

export default function Noti({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
      }}>
     <Text>Notification</Text>
    </View>
  );
}
