import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Info from '../component/Info'
import Login from './Login'
import Signup from './Sigunup'


const Stack = createStackNavigator()

export default function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Signup' component={Signup} options={{header: () => null}} />
                <Stack.Screen name="Login" component={Login} options={{header:() => null}} />
                <Stack.Screen name='Info' component={Info} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
