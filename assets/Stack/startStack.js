import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "../Screen/loading";
import HomeTabStack from "../Stack/homeTabStack";
import Register from "../Screen/register";
import RegisterDetail from "../Screen/registerDetail";
import { Provider } from "react-redux";
import store from "../redux/store/store_config";
const Stack = createStackNavigator();

function startStack() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Loading"
                        component={LoadingScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="HomeTabStack"
                        component={HomeTabStack}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Register"
                        component={Register}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RegisterDetail"
                        component={RegisterDetail}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

export default startStack;
