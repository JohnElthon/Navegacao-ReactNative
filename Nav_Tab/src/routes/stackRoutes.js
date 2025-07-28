import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Detalhes from '../pages/Detalhes';

const Stack = createStackNavigator();


export default function StackRoutes() {
    return (

        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
            />

            <Stack.Screen
                name="Detalhes"
                component={Detalhes}
            />
        </Stack.Navigator>

    )
}