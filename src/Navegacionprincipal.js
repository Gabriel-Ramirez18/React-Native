import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import LoginP1 from "./Screen/login/LoginP1"
import Navegation from ".Navegation/";

const Stack = createStackNavigator();

function MyStackLogin() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="login" component={LoginP1} />
            <Stack.Screen name="Home" component={Navegation} />
            
        </Stack.Navigator>
    );
}             



export default function Navigationprincipal() {
    return (
        <NavigationContainer>
            <MyStackLogin/>
        </NavigationContainer>
    );
}
