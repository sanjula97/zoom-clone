import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import MeetingRoom from './screens/MeetingRoom';

function Navigation() {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen 
                    name="Room" 
                    component={MeetingRoom} 
                    options={{ 
                        title: 'Start a meeting',
                        headerStyle: {
                            backgroundColor: '#1c1c1c'
                        },
                        headerTintColor: "white",
                        }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
