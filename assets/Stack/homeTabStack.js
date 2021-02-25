import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from "../Stack/homeMainStack"
import ProfileScreen from "../Screen/profile"
import SettingsScreen from "../Screen/settings"
import ExploreScreen from "../Screen/explore"
import AddEventScreen from "../Screen/addEvent"
import { View } from 'react-native';
const Tab = createMaterialBottomTabNavigator();

function homeTabStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack} />
            <Tab.Screen name="Explore" component={ExploreScreen} />
            <Tab.Screen name="AddEvent" component={AddEventScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            
        </Tab.Navigator>
    )
}

export default homeTabStack
