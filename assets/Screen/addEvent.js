import React, {useState,useRef} from 'react'
import { Text, View, StyleSheet, StatusBar, Pressable,Image,TextInput,Animated, ScrollView,Modal } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import * as ImageManipulator from 'expo-image-manipulator';
import { Ionicons } from '@expo/vector-icons';
import {Picker} from '@react-native-picker/picker';
import MapView, {Marker} from 'react-native-maps';

function addEvent(props) {
    const[image,setImage]=useState(null)
    const[publicity,setPublicity] = useState(true)
    const[carStatus,setCarSatus] = useState(true)
    const[location,setLocation] = useState({latitude : 22 , longitude : 33 })
    const [participants, setParticipants] = useState(1);
    const[modal,setModal] = useState(false)
    const numbers=[1,2,3,4,5,10,20,30,40,50,100,500,1000]
    const pickerItems = numbers.map((number)=>
    <Picker.Item label={`${number}`}  key={number.toString()}  value={number} /> 
    )



    const bottomValue = useRef(new Animated.Value(-300)).current
    const bottomUp = () => {
        Animated.timing(bottomValue, {
          toValue: 0,
          duration: 500,
          useNativeDriver:false
        }).start();
      };
      const bottomDown = () => {
        Animated.timing(bottomValue, {
          toValue: -300,
          duration: 500,
          useNativeDriver:false
        }).start();
      };
    const confirm = () => {
    }

    const openImagePickerAsync = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        const pickerResult = await ImagePicker.launchImageLibraryAsync({allowsEditing:true,aspect:[3,2]});
        if (pickerResult.cancelled === true) {
            return;
        }

        const manipulated = await ImageManipulator.manipulateAsync(
            pickerResult.uri,
            [{resize:{height:600,width:900}}],
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
        
        const cameraResult = await ImagePicker.launchCameraAsync({allowsEditing:true,aspect:[3,2]});
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
    
    
    return (
        <View style={styles.conteiner} >
            <View style={styles.top}>
                <Image style={styles.logo} source={require("../Icons/instagram.png")} />
                <Text style={styles.headText}>Cover Photo</Text>
                <Text style={styles.text}>Let's choose an interesting cover photo to highlight your event for you.</Text>
            </View>
            <View style={styles.main}>
            <Pressable style={{width:"100%",alignItems:"center"}} onPress={openImagePickerAsync}>
                {image ? <Image style={styles.addImage} source={{ uri: image.uri }} /> : <Image style={styles.addImage} source={require("../icon.png")} />}
            </Pressable>
            <Pressable onPress={openImagePickerAsync} style={styles.button}>
                <Ionicons name="image-outline" size={26} color="black" />
                <Text style={styles.buttonText}>Pick image from gallery</Text>
            </Pressable>
            <Pressable onPress={openCameraAsync} style={styles.button}>
                <Ionicons name="camera-outline" size={26} color="black" />
                <Text style={styles.buttonText}>Let's take a picture</Text>
            </Pressable>
            <Text style={styles.text}>Please notice that everyone will be able to see this photo.</Text>
            <Pressable onPress={bottomUp} style={styles.confirm} >
                <Text style={[styles.buttonText,{color:"#ffffff",fontSize:16,letterSpacing:1}]}>Confirm</Text>
            </Pressable>
            </View>
            <Animated.View style={[styles.bottomSheet,{bottom:bottomValue}]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.bottomTop}>
                    <Text style={styles.headText}>Details</Text>
                    <Pressable onPress={bottomDown} style={{position:"absolute",right:0,top:20}}>
                        <Text>Cancel</Text>
                    </Pressable>
                </View>
                <View style={styles.bottomPrivacy}>
                    <Ionicons name="people" size={26} color="black" />
                    <Text style={styles.optionsLabel}>Publicity</Text>
                    <View style={styles.buttonConteiner}>
                    <Pressable onPress={()=>setPublicity(true)} style={[styles.publicityButton,publicity ? {backgroundColor:"green",borderWidth:0} : {backgroundColor:"white",borderWidth:1} ]}>
                        <Text style={{color: publicity ? "white":"black"}}>Public</Text>
                    </Pressable>
                    <Pressable onPress={()=>setPublicity(false)} style={[styles.publicityButton,publicity ? {backgroundColor:"white",borderWidth:1} : {backgroundColor:"green",borderWidth:0}  ]}>
                        <Text style={{color: publicity ? "black":"white"}}>Friends Only</Text>
                    </Pressable>
                    </View>
                </View>
               {publicity ?  
                null :
                <View style={styles.bottomPrivacy}>
                    <Ionicons name="car" size={26} color="black" />
                    <Text style={styles.optionsLabel}>Car Status</Text>
                    <View style={styles.buttonConteiner}>
                    <Pressable onPress={()=>setCarSatus(true)}  style={[styles.publicityButton,carStatus ? {backgroundColor:"green",borderWidth:0} : {backgroundColor:"white",borderWidth:1} ]}>
                        <Text style={{color: carStatus ? "white":"black"}}>Car</Text>
                    </Pressable>
                    <Pressable onPress={()=>setCarSatus(false)}  style={[styles.publicityButton,carStatus ? {backgroundColor:"white",borderWidth:1} : {backgroundColor:"green",borderWidth:0}  ]}>
                        <Text style={{color: carStatus ? "black":"white"}}>No Car</Text>
                    </Pressable>
                    </View>
                </View> 
                }
                 <View style={styles.bottomPrivacy}>
                    <Ionicons name="person-add" size={26} color="black" />
                    <Text style={styles.optionsLabel}>Participants</Text>
                    <Picker style={styles.picker}  
                        selectedValue={participants}
                        onValueChange={(itemValue) =>
                            setParticipants(itemValue)
                        }>
                        {pickerItems}
                    </Picker>
                </View>
                <View style={styles.bottomPrivacy}>
                    <Ionicons name="location" size={26} color="black" />
                    <Text style={styles.optionsLabel}>Location</Text>
                    <Pressable onPress={()=>setModal(true)} style={[styles.publicityButton,{marginLeft:10}]}>
                        <Text>Set Location</Text>
                    </Pressable>
                </View>
                <View style={[styles.bottomPrivacy,{marginBottom:20,justifyContent:"center"}]}>
                    
                    <Pressable style={[styles.publicityButton,{width:"100%",alignItems:"center"}]}>
                        <Text>Create Event</Text>
                    </Pressable>
                </View>
                </ScrollView>
            </Animated.View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                setModalVisible(!modal);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text>Set Location</Text>
                    <Pressable
                    onPress={() => setModal(!modal)}
                    >
                    <Text>Hide Modal</Text>
                    </Pressable>
                    <MapView  style={styles.map}>
                        <Marker draggable
                            coordinate={location}
                            onDragEnd={(e) => setLocation(e.nativeEvent.coordinate)}
                        />
                        <Text>
                            {location.latitude}
                        </Text>
                    </MapView>
                </View>
                </View>
            </Modal>
            <StatusBar barStyle="light-content" />
        </View>
    )
}

export default addEvent
const styles = StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"#ffffff",
        
    },
    buttonConteiner:{
        justifyContent:"space-evenly",
        flexDirection:"row",
        width:"60%"
    },
    picker:{
        height:50,
        width:110,
        marginLeft:20,
        
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
        width:"80%",
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
    },
    bottomSheet:{
        height:300,
        backgroundColor:"#fff",
        width:"100%",
        position:"absolute",
        elevation:10,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingHorizontal:20,
        
        
    },
    bottomTop:{
        width:"100%",
        alignItems:"center",
    },
    bottomPrivacy:{
        marginTop:20,
        flexDirection:"row",
        alignItems:"center"
    },
    optionsLabel:{
        fontSize:17,
        marginLeft:5   
    },
    publicityButton:{
        height:40,
        paddingHorizontal:10,
        borderWidth:1,
        borderColor:"purple",
        justifyContent:"center",
        borderRadius:3
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
         
      },
      modalView: {
        margin: 0,
        height:"70%",
        width:"90%",
        backgroundColor: "white",
        borderRadius: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow:"hidden"
      },
      map:{
          height:"100%",
          width:"100%",
          
      }
});