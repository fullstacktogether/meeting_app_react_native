import React from 'react'
import { Text, View } from 'react-native'
import {useEffect,useState} from "react"
function loading(props) {
    const [token,setToken]=useState(null)
    useEffect(() => {
        const timer = setTimeout(() => {
            setToken(0);
          }, 1000);
          return () => clearTimeout(timer);    
    },[]);
    useEffect(() => {
         if(token==0) props.navigation.replace("Register")
         if(token) props.navigation.replace("HomeTabStack")
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
