import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import MenuPrincipal from "./screen/Home/MenuPrincipal";
import ScreenLuces from "./screen/Luces/ScreenLuces";
import ScreenSetting from "./screen/Setting/ScreenSetting";
import ScreenUser from "./screen/Users/ScreenUser";
import UserDetalles from "./screen/Users/UserDetalles";
import ScreenPuertas from "./screen/Puertas/ScreenPuertas";
import EditarUsuario from './screen/Users/EditarUsuario';

import Loginp2 from "./screen/Login/Loginp2";

import Userdatos from "./screen/Users/Userdatos"; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="usuarios" component={ScreenUser} />
            <Stack.Screen name="detalles" component={UserDetalles} />
            <Stack.Screen name="Userdatos" component={Userdatos} />
            <Stack.Screen name="EditarUsuario" component={EditarUsuario} />

        </Stack.Navigator>
    );
}             

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="menu"
            screenOptions={{
                tabBarActiveTintColor: 'purple'
            }}
        >
            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={size} color={color} />
                    ),
                }}
                name="menu"
                component={Loginp2}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="lightbulb-on-outline" size={size} color={color} />
                    ),
                }}
                name="luces"
                component={ScreenLuces}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="door" size={size} color={color} />
                    ),
                }}
                name="puerta"
                component={ScreenPuertas}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="user" size={size} color={color} />
                    ),
                }}
                name="user"
                component={MyStack}
            />

            <Tab.Screen
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="settings" size={size} color={color} />
                    ),
                }}
                name="settings"
                component={ScreenSetting}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
