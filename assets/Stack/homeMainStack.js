import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../Screen/home"
const Stack = createStackNavigator();

function homeMainStack(props) {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default homeMainStack;