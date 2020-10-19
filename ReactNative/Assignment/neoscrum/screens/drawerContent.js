import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {Avatar} from 'react-native-elements';
import {StyleSheet, View, Text, Alert} from 'react-native';
import {connect} from 'react-redux';
import {signout} from '../redux/action/signOutAction';

function DrawerContent({user, signout, ...props}) {
  signoutHandler = () => {
    Alert.alert('Warning!', 'Are you sure you want to signout', [
      {
        text: 'NO',
      },
      {text: 'YES', onPress: () => signout()},
    ]);
  };
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{flex: 1}}>
          <View style={styles.userInfoSection}>
            <View style={{marginTop: 20, flexDirection: 'row', marginLeft: 10}}>
              <Avatar
                rounded
                source={{
                  uri: user.user_image,
                  // 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Rohit_Sharma_November_2016_%28cropped%29.jpg',
                }}
                size={50}
              />
              <Text style={{marginLeft: 20, fontWeight: 'bold', fontSize: 18}}>
                {user.user_name}
              </Text>
            </View>
          </View>
          <View style={{marginTop: 20}}>
            <DrawerItemList {...props} />
          </View>
        </View>
        <View style={styles.bottomItem}>
          <DrawerItem label="Signout" onPress={() => signoutHandler()} />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  userInfoSection: {
    paddingLeft: 15,
  },
  bottomItem: {},
});

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signout: () => dispatch(signout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
