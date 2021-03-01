import React, {useState} from 'react'
import { Text, View, StyleSheet, StatusBar, ImageBackground, Image, Pressable } from 'react-native'
import LoginForm from "../Component/loginForm"
import SignForm from "../Component/signForm"

function register(props) {
    const [login, setlogin] = useState(true)
    return (
        <View style={styles.conteiner} >
            <ImageBackground style={styles.conteiner2} blurRadius={3} source={require("../Background/register_background2.jpg")} style={styles.imgBackground}>
                <View style={styles.conteiner}>
                    <View style={styles.logoConteiner}>
                        <Image style={{width:"25%",resizeMode:"center"}} source={require("../Icons/instagram.png")} />
                    </View>
                    <View style={styles.formConteiner}>
                        <View style={styles.formChoose}>
                            <Pressable onPress={()=>setlogin(true)}>
                                <Text>Login</Text>
                            </Pressable>
                            <Pressable onPress={()=>setlogin(false)}>
                                <Text>Signup</Text>
                            </Pressable>
                        </View>
                        {login ? <LoginForm></LoginForm> : <SignForm navigation={props.navigation} ></SignForm>}
                    </View>
                </View>
            </ImageBackground>
            <StatusBar backgroundColor="transparent" barStyle="light-content" translucent/>
        </View>
    )
}

export default register
const styles = StyleSheet.create({
    conteiner:{
        flex:1
    },
    conteiner2:{
        flex:1
    },
    imgBackground:{
        flex:1,
    },
    logoConteiner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    formConteiner:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    formChoose:{
        flexDirection:"row",
        position: "absolute",
        top:0
    }
});