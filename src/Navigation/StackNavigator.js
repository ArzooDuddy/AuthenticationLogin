import React from 'react'
const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/Login/LoginScreen';
import PostView from '../screens/PostShow/PostView';
import Description from '../screens/PostShow/Description'
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Login" component={LoginScreen} 
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="PostView" component={PostView} 
        options={{
          headerShown:false
        }}/>
        <Stack.Screen name="Description" component={Description} options={{
          headerShown:false,
          animation:'slide_from_bottom'
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

