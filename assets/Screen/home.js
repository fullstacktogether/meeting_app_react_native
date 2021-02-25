import React from 'react';
import { SafeAreaView, Text, View,StatusBar } from 'react-native';

function home() {
    return (
       <SafeAreaView>
           <Text>Home Screen</Text>
           <StatusBar /> 
       </SafeAreaView>
    );
}

export default home;