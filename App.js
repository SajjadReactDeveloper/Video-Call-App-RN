import React from 'react';
import Navigations from './src/Components/Navigations/Navigations';
import { View }  from 'react-native';
import ContactScreen from './src/Screens/ContactScreen/ContactScreen';
import CallActionBox from './src/Screens/CallActionbox/CallActionBox';
import CallingScreen from './src/Screens/CallingScreen/CallingScreen';
import CallScreen from './src/Screens/CallScreen/CallScreen';
import IncommingCallScreen from './src/Screens/IncommingCallScreen/IncommingCallScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Contacts" component={ContactScreen} />
            <Stack.Group screenOptions = {{headerShown: false}}>
                <Stack.Screen name="Call" component={CallScreen}/>
                <Stack.Screen name="Calling" component={CallingScreen} />
                <Stack.Screen name="IncommingCall" component={IncommingCallScreen} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
