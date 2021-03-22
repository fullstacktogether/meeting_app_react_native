import React from "react";
import { Pressable, Text, View } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function loading(props) {
    const dispatch = useDispatch();

    useEffect(() => {
        getToken()
            .then((value) => {
                if (value === null) {
                    return props.navigation.replace("Register");
                }
                dispatch({ type: "SET_TOKEN", payload: { token: value } });
                return value
            })
            .then((value)=>{
                if(value) getUserInfo(value)
            })
            .catch((e) => console.log(e));
    }, []);

    const getUserInfo = async (value) => {
            
            fetch("http://192.168.1.106:3000/api/auth/me", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${value}`
                },
                
            })
                .then((res) => res.json())
                .then((res)=>{
                    dispatch({ type: "SET_USER", payload: { user: res } });
                })
                .then(()=>props.navigation.replace("HomeTabStack"))
                .catch((e) => console.log(e))
                .done();
        
    }
    const getToken = async () => {
        try {
            const token = await AsyncStorage.getItem("Store:token");
            return token;
        } catch (e) {
            throw e;
        }
    };
    return (
        <View style={{ paddingTop: 50 }}>
            <Text>LOADING....</Text>
        </View>
    );
}
const mapStateToProps = (state) => {
    return {
        store: state,
    };
};

export default connect(mapStateToProps)(loading);
