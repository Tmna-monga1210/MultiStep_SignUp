import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../screens/Welcome';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <>
    <Stack.Navigator>
      <Stack.Screen
        name = 'welcome'
        component= {Welcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name = 'signUp'
        component= {SignUp}
        options={{
          headerShown : false
        }} 
      />
      <Stack.Screen
        name = 'signIn'
        component= {SignIn}
        options={{
          headerShown : false
        }} 
      />
      <Stack.Screen
        name = 'home'
        component= {Welcome}
        options={{
          headerShown : false
        }} 
      />
    </Stack.Navigator>
      
    </>
  )
}
export default MainScreen;
