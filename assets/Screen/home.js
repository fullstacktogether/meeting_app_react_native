import React from 'react';
import { SafeAreaView, Text, View, StatusBar, StyleSheet, Pressable } from 'react-native';
import Header from "../Component/header"
import Event from "../Component/event"
function home() {
    return (
       <SafeAreaView style={styles.conteiner}>
           <Header/>
            <View style={styles.chooseConteiner}>
                <Pressable>
                <Text style={{fontSize:22,fontWeight:"600"}}>Followings</Text>
                </Pressable>
                <Pressable>
                <Text style={{marginLeft:10,fontSize:18,opacity:0.5}}>Public</Text>
                </Pressable>
            </View>
            <View style={styles.eventConteiner}>
                <Event/>
            </View>

           <StatusBar barStyle="dark-content" backgroundColor="#ffffff" /> 
       </SafeAreaView>
    );
}

export default home;
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"#ffffff",
    },
    eventConteiner:{
        width:"100%",
        alignItems: 'center', 
        paddingTop:50
    },
    chooseConteiner:{
        height:60,
        width:"100%",
        flexDirection:"row",
        alignItems:"flex-end",
        paddingHorizontal:20
    },
    
});