import React from 'react'
import { View, StyleSheet,Image,Text} from 'react-native'

function event() {
    return (
        <View style={styles.conteiner}>
            <View style={styles.profileConteiner}>
                <Image source={require("../Images/sample2.jpg")} style={styles.profilePic} />
            </View>
            <View style={styles.topConteiner} >
                <Text style={styles.username} >Social Machine</Text>
                <Text style={styles.time} >58m ago</Text>
            </View>
            <Image source={require("../Images/sample1.jpg")} style={styles.coverImage} />
            <View style={styles.bottomConteiner}>
                <View style={styles.bottom1}>
                    <Image source={require("../Icons/instagram.png")} style={styles.icon} />
                    <Text style={styles.subject}>Park Walking</Text>
                </View>
                <View style={styles.bottom2}>
                    <Image source={require("../Icons/instagram.png")} style={styles.icon} />
                    <Image source={require("../Icons/instagram.png")} style={styles.icon} />
                    <Image source={require("../Icons/instagram.png")} style={styles.icon} />

                </View>
            </View>
        </View>
    )
}

export default event
const styles = StyleSheet.create({
    conteiner:{
        width:"90%",
        height:350,
        backgroundColor:"#ffffff",
        elevation: 5,
        borderRadius:11
    },
    profileConteiner:{
        position:"absolute",
        height:64,
        width:64,
        top:-32,
        left:20,
        borderRadius:11,
        borderWidth:3,
        borderColor:"#ffffff",
        elevation:5
    },
    profilePic:{
        height:"100%",
        width:"100%",
        resizeMode:"cover",
        borderRadius:11
    },
    topConteiner:{
        position:"absolute",
        top:38,
        width:"100%",
        height:50,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:20
    },
    username:{
        fontSize:18,
        opacity:0.75,
        fontWeight:"bold"
    },
    time:{
        position:"absolute",
        right:20,
        fontSize:12,
        opacity:0.4
    },
    coverImage:{
        position:"absolute",
        top:90,
        width:"100%",
        height:200,
        resizeMode:"cover"
    },
    bottomConteiner:{
        flexDirection:"row",
        height:60,
        width:"100%",
        position:"absolute",
        top:290,
        paddingVertical:9
        
    },
    bottom1:{
        width:"50%",
        borderRightWidth:0.5,
        borderRightColor:"#aaa",
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:20
    },
    bottom2:{
        width:"50%",
        borderLeftWidth:0.5,
        borderLeftColor:"#aaa",
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:20,
        justifyContent:"space-between"
    },
    icon:{
        height:28,
        width:28,
        resizeMode:"center"
    },
    subject:{
        marginLeft:10,
        opacity:0.7,
        fontSize:15
    }
});