import React, {useState} from 'react'
import { Text, View, StyleSheet, StatusBar, Pressable,Image,TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'


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
        setImage({ localUri: pickerResult.uri });
      }
    return (
        <View style={styles.conteiner} >
            <View>
                <Text>Full Name</Text>
                <TextInput/>
            </View>
            <Pressable onPress={openImagePickerAsync}>
                {image ? <Image style={styles.addImage} source={{ uri: image.localUri }} /> : <Image style={styles.addImage} source={require("../icon.png")} />}
            </Pressable>
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
    },
    addImage:{
        width:100,
        height:100,
        resizeMode:"cover"
    }
});