import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeStack from "../Stack/homeMainStack";
import ProfileScreen from "../Screen/profile";
import SettingsScreen from "../Screen/settings";
import ExploreScreen from "../Screen/explore";
import AddEventScreen from "../Screen/addEvent";
import { Ionicons } from "@expo/vector-icons";

//home iosmap addcircle settings iosperson
const Tab = createMaterialBottomTabNavigator();
const Icon = (name, color, focused) => {
    return (
        <Ionicons
            name={`${name}${focused ? "" : "-outline"}`}
            color={color}
            size={24}
        />
    );
};
function homeTabStack() {
    return (
        <Tab.Navigator activeColor="#ffffff">
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: "Home",
                    tabBarColor: "#000000",
                    tabBarIcon: (props) =>
                        Icon("home", props.color, props.focused),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={ExploreScreen}
                options={{
                    tabBarLabel: "Explore",
                    tabBarColor: "#000000",
                    tabBarIcon: (props) =>
                        Icon("ios-map", props.color, props.focused),
                }}
            />
            <Tab.Screen
                name="AddEvent"
                component={AddEventScreen}
                options={{
                    tabBarLabel: "Add Event",
                    tabBarColor: "#000000",
                    tabBarIcon: (props) =>
                        Icon("add-circle", props.color, props.focused),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: "Settings",
                    tabBarColor: "#000000",
                    tabBarIcon: (props) =>
                        Icon("settings", props.color, props.focused),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarColor: "#000000",
                    tabBarIcon: (props) =>
                        Icon("ios-person", props.color, props.focused),
                }}
            />
        </Tab.Navigator>
    );
}

export default homeTabStack;
