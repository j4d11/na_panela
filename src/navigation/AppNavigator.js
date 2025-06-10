// src/navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigator from './StackNavigatior';
import CustomDrawer from '../components/Drawer'; // seu drawer estilizado

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen name="Principal" component={StackNavigator} />
            {/* Você pode adicionar outras telas diretas no Drawer aqui, se quiser */}
        </Drawer.Navigator>
    );
}
