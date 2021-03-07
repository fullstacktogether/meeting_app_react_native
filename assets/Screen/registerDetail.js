import React, {useState} from 'react'
import { Text, View, StyleSheet, StatusBar, Pressable,Image,TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator';


function registerDetail(props) {
    const[image,setImage]=useState(null)
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync({allowsEditing:true,aspect:[1,1]});
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
            <Pressable onPress={openImagePickerAsync}>
                {image ? <Image style={styles.addImage} source={{ uri: image.uri }} /> : <Image style={styles.addImage} source={require("../icon.png")} />}
            </Pressable>
            <Pressable onPress={uploadAvatar} >
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
    },
    addImage:{
        width:100,
        height:100,
        resizeMode:"cover"
    }
});