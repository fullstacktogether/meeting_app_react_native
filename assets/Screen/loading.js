import React from 'react'
import { Text, View } from 'react-native'
import {useEffect,useState} from "react"
function loading(props) {
    const [token,setToken]=useState(null)
    useEffect(() => {
        const timer = setTimeout(() => {
            setToken(0);
          }, 3000);
          return () => clearTimeout(timer);    
    },[]);
    useEffect(() => {
         if(token==0) props.navigation.navigate("Register")
         if(token) props.navigation.navigate("HomeTabStack")
    },[token]);
    return (
        <View>
            <Text>
                Loading...
                Check if there is JWT token
            </Text>
        </View>
    )
}

export default loading
