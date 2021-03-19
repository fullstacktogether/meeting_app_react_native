import React from "react";
import { View, StyleSheet, Image, Text, Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function header() {
    return (
        <View style={styles.conteiner}>
            <View>
                <Image
                    style={styles.logo}
                    source={require("../Icons/instagram.png")}
                />
            </View>
            <View>
                <Text style={styles.brand}>Home</Text>
            </View>
            <View>
                <Image
                    style={styles.logo}
                    source={require("../Icons/instagram.png")}
                />
            </View>
        </View>
    );
}

export default header;
const styles = StyleSheet.create({
    conteiner: {
        height: 60,
        width: "100%",
        backgroundColor: "#ffffff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
    logo: {
        resizeMode: "center",
        height: 30,
        width: 30,
    },
    brand: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
