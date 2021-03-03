import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeStack from "../Stack/homeMainStack"
import ProfileScreen from "../Screen/profile"
import SettingsScreen from "../Screen/settings"
import ExploreScreen from "../Screen/explore"
import AddEventScreen from "../Screen/addEvent"
const Tab = createMaterialBottomTabNavigator();

function homeTabStack() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={HomeStack} options={{tabBarColor:"#ffffff"}} />
            <Tab.Screen name="Explore" component={ExploreScreen} options={{tabBarColor:"#000000"}} />
            <Tab.Screen name="AddEvent" component={AddEventScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarColor:"#b95d8d"}} />
            
            
        </Tab.Navigator>
    )
}

export default homeTabStack
