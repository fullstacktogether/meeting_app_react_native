import React from "react";
import { Text, View, StyleSheet, Pressable, Alert } from "react-native";
import { BlurView } from "expo-blur";
import { TextInput } from "react-native-gesture-handler";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

function signForm(props) {
    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const dispatch = useDispatch();
    const signUp = async () => {
        fetch("http://192.168.1.106:3000/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
            }),
        })
            .then((res) => res.json())
            .then(async (res) => {
                if (res.token) {
                    try {
                        await AsyncStorage.setItem("Store:token", res.token);
                        dispatch({
                            type: "SET_TOKEN",
                            payload: { token: res.token },
                        });
                        return props.navigation.replace("Loading");
                    } catch (e) {
                        Alert.alert("err");
                    }
                }
                Alert.alert(res.message);
            })
            .catch((e) => console.log(e))
            .done();
    };
    return (
        <BlurView intensity={100} style={styles.continer}>
            <View>
                <Text style={styles.label}>Username</Text>
                <TextInput
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    style={styles.input}
                />
            </View>
            <View>
                <Text style={styles.label}>Password</Text>
                <TextInput
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    style={styles.input}
                />
            </View>
            <View>
                <Pressable onPress={() => signUp()}>
                    <LinearGradient
                        start={[0, 1]}
                        end={[1, 0]}
                        colors={["#7b4397", "#7b4397", "#dc2430"]}
                        style={styles.button}
                    >
                        <Text style={styles.loginText}>Sign Up</Text>
                    </LinearGradient>
                </Pressable>
            </View>
        </BlurView>
    );
}
const mapStateToProps = (state) => {
    return {
        store: state,
    };
};
export default connect(mapStateToProps)(signForm);
const styles = StyleSheet.create({
    continer: {
        width: "90%",
        borderRadius: 7,
        height: "70%",
        justifyContent: "space-evenly",
        paddingHorizontal: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#ffffff",
        color: "#fff",
        fontWeight: "bold",
    },
    label: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        opacity: 0.5,
    },
    button: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    loginText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        letterSpacing: 5,
    },
});
