import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RecipeDatailsScreen from '../screens/RecipeDatailsScreen';
import CategoryScreen from '../screens/CategoryScreen';
import ChefProfileScreen from '../screens/ChefProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Perfil" component={ProfileScreen} />
                <Stack.Screen name="Detalhes" component={RecipeDatailsScreen} />
                <Stack.Screen name="Categorias" component={CategoryScreen} />
                <Stack.Screen name="ChefPerfil" component={ChefProfileScreen} />
                <Stack.Screen name="Cadastro" component={RegisterScreen} />
            </Stack.Navigator>
    );
}
