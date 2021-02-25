import React from 'react'
import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from "../Screen/loading"
import HomeTabStack from "../Stack/homeTabStack"
import Register from "../Screen/register"
const Stack = createStackNavigator();

function startStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Loading" component={LoadingScreen} />
                <Stack.Screen name="HomeTabStack" component={HomeTabStack} />
                <Stack.Screen name="Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default startStack
