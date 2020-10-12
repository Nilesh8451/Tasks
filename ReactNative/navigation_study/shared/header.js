import React from 'react'
import {View , Text, StyleSheet} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Header({navigation,title}){

    const openMenu = ()=>{
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
             <MaterialCommunityIcons name="menu" color={'black'} size={26} onPress={()=>{openMenu()}} style={styles.icon}/>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        width:'100%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    headerText :{
        fontWeight:'bold',
        fontSize:20,
        color:'#333'
    },
    icon:{
        position:'absolute',
        left:16
    }
})