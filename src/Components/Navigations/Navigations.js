import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CallScreen from '../../Screens/CallScreen/CallScreen';
import CallingScreen from '../../Screens/CallingScreen/CallingScreen';
import ContactScreen from '../../Screens/ContactScreen/ContactScreen';
import IncommingCallScreen from '../../Screens/IncommingCallScreen/IncommingCallScreen';
import loginScreen from '../../Screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

export default function Navigations() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={loginScreen} />
            <Stack.Screen name="Contacts" component={ContactScreen} />
            <Stack.Group screenOptions = {{headerShown: false}}>
                <Stack.Screen name="Call" component={CallScreen}/>
                <Stack.Screen name="Calling" component={CallingScreen} />
                <Stack.Screen name="IncommingCall" component={IncommingCallScreen} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
