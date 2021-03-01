import React from 'react'
import { Text, View,StyleSheet, Pressable } from 'react-native'
import { BlurView } from 'expo-blur';
import { TextInput } from 'react-native-gesture-handler';

function loginForm() {
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
            <Pressable>
                <Text>Login</Text>
            </Pressable>
        </View>
      </BlurView>
    )
}

export default loginForm
const styles = StyleSheet.create({
    continer:{
        width:"75%",
        borderRadius:7
    }
});