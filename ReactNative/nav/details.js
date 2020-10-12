import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';
import {styles} from './styles/styles';

export default class Details extends Component {
  render() {
    // console.log(this.props);
    return (
      <View style={styles.center}>
        <Text style={styles.title}>{this.props.route.params.screenName}</Text>
        <Button
          title="View Bottom Tabs"
          onPress={() =>
            this.props.navigation.navigate('Bottom Tabs', {name: 'MY Tab1'})
          }
        />
        <Button
          title="View Top Tabs"
          onPress={() => this.props.navigation.navigate('Top Tabs')}
        />

        <Button
          title="Pass Data Back"
          onPress={() =>
            this.props.navigation.navigate('Feed', {data: 'Hello!'})
          }
        />
      </View>
    );
  }
}
