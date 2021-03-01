import React from 'react'
import { Text, View,StyleSheet, Pressable,TextInput } from 'react-native'
import { BlurView } from 'expo-blur';


function signForm(props) {
    return (
        <BlurView intensity={100} style={styles.continer}>
        <View>
            <Text>Email</Text>
            <TextInput/>
        </View>
        <View>
            <Text>Password</Text>
            <TextInput/>
        </View>
        <View>
            <Text>Password again</Text>
            <TextInput/>
        </View>
        <View>
            <Pressable onPress={()=>props.navigation.replace("RegisterDetail") } >
                <Text>Signup</Text>
            </Pressable>
        </View>
      </BlurView>
    )
}

export default signForm
const styles = StyleSheet.create({
    continer:{
        width:"75%",
        borderRadius:7
    }
});