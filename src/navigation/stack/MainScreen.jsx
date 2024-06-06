import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../../screens/Welcome';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';
import Home from '../../screens/Home';
import SignUp2 from '../../screens/SignUp2';
import SignUp3 from '../../screens/SignUp3';

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
        component= {Home}
        options={{
          headerShown : false
        }} 
      />
      <Stack.Screen
        name = 'signUp2'
        component= {SignUp2}
        options={{
          headerShown : false
        }} 
      />
      <Stack.Screen
        name = 'signUp3'
        component= {SignUp3}
        options={{
          headerShown : false
        }} 
      />
    </Stack.Navigator>
      
    </>
  )
}
export default MainScreen;
