import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HorizontalList"
import Color from "../constants/Color"

const Stack = createStackNavigator()

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home'
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Login' component={LoginScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default MainNavigation;
// screenOptions = {{

// }}