import React from 'react'
import { Pressable, Text, View } from 'react-native'
import {useEffect,useState} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'

function loading(props) {
    const dispatch = useDispatch()

    useEffect(()=>{
        getToken()
            .then((value)=>{
                if(value===null){
                    return props.navigation.replace("Register")
                }
                dispatch({ type: 'SET_TOKEN',payload:{token:value} })
                props.navigation.replace("HomeTabStack")
            })
            .catch((e)=>console.log(e))
        
    },[])
      
    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem('Store:token')
            return token
            
        } catch(e) {
            throw e
        }
    }
    return (
        <View style={{paddingTop:50}}>
            <Text>LOADING....</Text>
        </View>
    )
}
const mapStateToProps = (state) => {
    return {
      store: state,
    }
  }

export default connect(mapStateToProps)(loading)

