import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignInScreen">
        {/* SignInScreen as the initial screen */}
        <Stack.Screen 
          name="SignInScreen" 
          component={SignInScreen} 
          options={{ title: 'Sign In', headerShown: false }} // Hiding header for a cleaner look
        />
        {/* HomeScreen where user is navigated to after successful sign-in */}
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
