import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {styles} from './styles/styles';

export default class Feed extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.center}>
        <Text style={styles.title}>Navigation Drawer</Text>
        <Button
          title="Go to Feed Item"
          onPress={() =>
            this.props.navigation.navigate('Detail', {
              screenName: 'My Detail Screen',
            })
          }
        />
      </View>
    );
  }
}
