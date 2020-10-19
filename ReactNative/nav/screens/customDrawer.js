import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function CustomDrawer({...props}) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <View style={styles.userInfoSection}>
        <View style={{marginTop: 20, flexDirection: 'row', marginLeft: 10}}>
          <Avatar.Image
            source={{
              uri:
                'https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg',
            }}
            size={50}
          />
          <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
            Rohit Sharma
          </Text>
        </View>
      </View>
      <View style={{marginTop: 20}}>
        <DrawerItemList {...props} />
      </View>
      <Drawer.Section>
        <Drawer.Item
          icon={({color, size}) => <Icon name="home-outline" />}
          label="CustomItem"
          onPress={() => {}}
        />
      </Drawer.Section>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 15,
  },
});

export default CustomDrawer;
