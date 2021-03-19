import React from "react";
import { useEffect } from "react";
import { Text, View, StatusBar, StyleSheet } from "react-native";
import MapView from "react-native-maps";

function explore() {
    return (
        <View style={styles.conteiner}>
            <MapView style={styles.map}></MapView>
        </View>
    );
}

export default explore;
const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    map: {
        height: "100%",
        width: "100%",
    },
});
