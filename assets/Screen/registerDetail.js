import React, {useState} from 'react'
import { Text, View, StyleSheet, StatusBar, Pressable,Image,TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator';
import { Ionicons } from '@expo/vector-icons';


function registerDetail(props) {
    const[image,setImage]=useState(null)
    const openImagePickerAsync = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        const pickerResult = await ImagePicker.launchImageLibraryAsync({allowsEditing:true,aspect:[1,1]});
        if (pickerResult.cancelled === true) {
            return;
        }

        const manipulated = await ImageManipulator.manipulateAsync(
            pickerResult.uri,
            [{resize:{height:400,width:400}}],
            { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        )
        setImage(manipulated)

         
    }
    const openCameraAsync = async () => {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync()
        if(permissionResult.granted === false){
            console.log("Reddedildi")
            return;
        }
        
        const cameraResult = await ImagePicker.launchCameraAsync({allowsEditing:true,aspect:[1,1]});
        if(cameraResult.cancelled === true){
            return;
        }
        const manipulated = await ImageManipulator.manipulateAsync(
            cameraResult.uri,
            [{resize:{height:400,width:400}}],
            { compress: 1, format: ImageManipulator.SaveFormat.PNG }
        )
        setImage(manipulated)
    }
    const uploadAvatar = async () => {
        const photo = {
            uri: image.uri,
            type: "image/jpg",
            name: "photo.jpg",
        };
        const form = new FormData()
        form.append("avatar", photo)
        
        fetch("http://192.168.1.104:3000/api/auth/me",{ method: 'PATCH',
        headers:{  
        "Content-Type": "multipart/form-data",
        "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjA0NGRjZDFjMGMwYzEyMDA4MDE0YzgzIiwiaWF0IjoxNjE1MTI1NzEzLCJleHAiOjE2NDY2NjE3MTN9.QCy_bvqZ3ZZObtqm2IATiUBAHM_1eHhvnCjqUVgAQ40"
        }, 
        body : form
        })
            .then((res) => res.json())
            .then((res) => { console.log("response" +JSON.stringify(res)); 
                if(res.avatar_url){
                    props.navigation.replace("HomeTabStack")
                }
            })
            .catch((e) => console.log(e))
            .done()
    }


    return (
        <View style={styles.conteiner} >
            <View style={styles.top}>
                <Image style={styles.logo} source={require("../Icons/instagram.png")} />
                <Text style={styles.headText}>Profile Photo</Text>
                <Text style={styles.text}>Let's choose an interesting profile photo to highlight your profile for you.</Text>
            </View>
            <View style={styles.main}>
            <Pressable onPress={openImagePickerAsync}>
                {image ? <Image style={styles.addImage} source={{ uri: image.uri }} /> : <Image style={styles.addImage} source={require("../icon.png")} />}
            </Pressable>
            <Pressable style={styles.button}>
                <Ionicons name="image-outline" size={26} color="black" />
                <Text style={styles.buttonText}>Pick image from gallery</Text>
            </Pressable>
            <Pressable onPress={openCameraAsync} style={styles.button}>
                <Ionicons name="camera-outline" size={26} color="black" />
                <Text style={styles.buttonText}>Let's take a picture</Text>
            </Pressable>
            <Text style={styles.text}>Please notice that everyone will be able to see this photo.</Text>
            <Pressable style={styles.confirm} onPress={uploadAvatar} >
                <Text style={[styles.buttonText,{color:"#ffffff",fontSize:16,letterSpacing:1}]}>Confirm</Text>
            </Pressable>
            </View>
            
            <StatusBar barStyle="light-content" />
        </View>
    )
}

export default registerDetail
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"#ffffff"
    },
    confirm:{
        justifyContent:"center",
        backgroundColor:"purple",
        height:50,
        width:"80%",
        elevation:5,
        borderRadius:7,
        marginTop:30,
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:15
    },
    buttonText:{
        fontSize:15,
        fontWeight:"bold",
        marginLeft:10
    },
    button:{
        height:50,
        width:"80%",
        elevation:5,
        borderRadius:7,
        backgroundColor:"#ffffff",
        marginTop:30,
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:15
    },
    addImage:{
        width:200,
        height:200,
        resizeMode:"cover",
        borderRadius:12
    },
    top:{
        paddingVertical:30,
        width:"100%",
        alignItems:"center"
    },
    logo:{
        resizeMode:"contain",
        height:48,
        width:48
    },
    headText:{
        fontSize:20,
        fontWeight:"bold",
        marginTop:15,
        letterSpacing:0.5
    },
    text:{
        fontSize:14,
        marginTop:15,
        marginHorizontal:50,
        textAlign:"center",
        letterSpacing:0.5,
        lineHeight:20,
        opacity:0.5
    },
    main:{
        alignItems:"center"
    }
});