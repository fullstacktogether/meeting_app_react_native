import React from 'react'
import { View, StyleSheet} from 'react-native'

function event() {
    return (
        <View style={styles.conteiner}>
            <View style={styles.profilePic}>

            </View>
        </View>
    )
}

export default event
const styles = StyleSheet.create({
    conteiner:{
        width:"90%",
        height:300,
        backgroundColor:"#ffffff",
        elevation: 5,
        borderRadius:11
    },
    profilePic:{
        position:"absolute",
        height:64,
        width:64,
        backgroundColor:"black",
        top:-32,
        left:20,
        borderRadius:11,
        borderWidth:3,
        borderColor:"#ffffff",
        elevation:5
    }
});