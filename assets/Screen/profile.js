import React, {useEffect} from 'react';
import { Text, View,StyleSheet, Image, StatusBar } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Event from "../Component/event";

function profile() {
    
    
    return (
        <View style={[styles.conteiner]}>
            <View style={styles.header}>
                <Image style={styles.logo}  source={require("../Icons/instagram.png")} />
                <Text style={styles.headerText}>My Profile</Text>
                <Image style={styles.logo}  source={require("../Icons/instagram.png")} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={styles.welcomeConteiner}>
                    <Text style={styles.welcomeText}>Welcome back!</Text>
                    <Text style={styles.usernameText}>Social Machine</Text>
                </View>
                <View style={styles.profileConteiner}>
                    <View style={styles.profileConteiner2}>
                        <Image source={require("../Images/sample2.jpg")} style={styles.profilePic} />
                    </View>
                    <View style={styles.followCardsConteiner}>
                        <View style={styles.followCards}>
                            <Text style={styles.cardText1}>25</Text>
                            <Text style={styles.cardText2}>Events</Text>
                        </View>
                        <View style={styles.followCards}>
                            <Text style={styles.cardText1}>175</Text>
                            <Text style={styles.cardText2}>Followers</Text>
                        </View>
                        <View style={styles.followCards}>
                            <Text style={styles.cardText1}>225</Text>
                            <Text style={styles.cardText2}>Followings</Text>
                        </View>
                    </View>
                    <Text style={styles.eventText}>My Events</Text>
                    <View style={styles.eventConteiner}>
                        <Event/>
                    </View>
                </View>
            </ScrollView>
            
        </View>
    );
}

export default profile;
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"#000000",
        
    },
    logo:{
        resizeMode:"center",
        height:30,
        width:30,
    },
    header:{
        height:60,
        backgroundColor:"#000000",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
        justifyContent:"space-between"
    },
    headerText:{
        fontSize:18,
        fontWeight:"bold",
        color:"#fff",
        letterSpacing:0.5
    },
    welcomeConteiner:{
        height:220,
        justifyContent:"space-evenly",
        paddingHorizontal:20
    },
    welcomeText:{
        fontSize:14,
        color:"#fff",
        opacity:0.9
    },
    usernameText:{
        fontSize:33,
        color:"#fff",
        fontWeight:"bold"
    },
    profileConteiner:{
        backgroundColor:"#fff",
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        
    },
    profilePic:{
        height:"100%",
        width:"100%",
        resizeMode: 'cover',
        borderRadius:8
    },
    profileConteiner2:{
        position:"absolute",
        height:80,
        width:80,
        top:-40,
        left:20,
        borderRadius:11,
        borderWidth:3,
        borderColor:"#ffffff",
        elevation:5
    },
    followCardsConteiner:{
        position:"absolute",
        top:50,
        height:150,
        width:"100%",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20
    },
    followCards:{
        width:"25%",
        aspectRatio:1,
        backgroundColor:"#fff",
        elevation:15,
        borderRadius:11,
        justifyContent:"center",
        alignItems:"center"
    },
    cardText1:{
        fontSize:22,
        fontWeight:"bold",
        color:"#000"
    },
    cardText2:{
        fontSize:12,
        color:"#000",
        opacity:0.5,
        marginTop:3
    },
    eventText:{
        fontSize:18,
        fontWeight:"bold",
        position:"absolute",
        top:220,
        left:20
        
    },
    eventConteiner:{
        marginBottom:50,
        width:"100%",
        marginTop:300,
        alignItems:"center",
        
    }
});