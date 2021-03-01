import React, {useState} from 'react'
import { Text, View, StyleSheet, StatusBar, Pressable } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'


function registerDetail(props) {
    
    return (
        <View style={styles.conteiner} >
            <View>
                <Text>Full Name</Text>
                <TextInput/>
            </View>
            <Pressable onPress={()=>props.navigation.replace("HomeTabStack")} >
                <Text>Confirm</Text>
            </Pressable>
            <StatusBar barStyle="light-content" />
        </View>
    )
}

export default registerDetail
const styles = StyleSheet.create({
    conteiner:{
        flex:1
    }
});