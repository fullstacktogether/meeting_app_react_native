import React, {useState} from 'react'
import { Text, View, StyleSheet, StatusBar, ImageBackground, Image, Pressable } from 'react-native'
import LoginForm from "../Component/loginForm"
import SignForm from "../Component/signForm"
import { LinearGradient } from 'expo-linear-gradient';

function register(props) {
    const [login, setlogin] = useState(true)
    return (
        
            <LinearGradient colors={['#42275a', '#734b6d', '#734b6d']} style={styles.conteiner} >
                    <View style={styles.logoConteiner}>

                    </View>
                    <View style={styles.formConteiner}>
                        <View style={styles.formChoose}>
                            <Pressable onPress={()=>setlogin(true)}>
                                <Text style={styles.formChooseText}>Login</Text>
                            </Pressable>
                            <Pressable onPress={()=>setlogin(false)}>
                                <Text style={styles.formChooseText}>Signup</Text>
                            </Pressable>
                        </View>
                        {login ? <LoginForm navigation={props.navigation}></LoginForm> : <SignForm navigation={props.navigation} ></SignForm>}
                    </View>
                 
                <StatusBar backgroundColor="transparent" barStyle="light-content" translucent/>
            </LinearGradient>
            
        
    )
}

export default register
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logoConteiner:{
        flex:1
    },
    formConteiner:{
        flex:2,
        width:"100%",
        alignItems:"center",
        justifyContent:"space-evenly"
    },
    formChoose:{
        flexDirection:"row",
        width:"50%",
        justifyContent:"space-around",

    },
    formChooseText:{
        fontSize:23,
        color:"#fff",
        fontWeight:"bold"
    }
});