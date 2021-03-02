import React from 'react';
import { SafeAreaView, Text, View, StatusBar, StyleSheet } from 'react-native';
import Header from "../Component/header"
import Event from "../Component/event"
function home() {
    return (
       <SafeAreaView style={styles.conteiner}>
           <Header/>
            
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
        paddingTop:100
    }
});