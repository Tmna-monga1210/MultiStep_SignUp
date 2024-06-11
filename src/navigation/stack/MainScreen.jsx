import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../../screens/Welcome';
import SignUp from '../../screens/SignUp';
import SignIn from '../../screens/SignIn';
import Home from '../../screens/Home';
import SignUp2 from '../../screens/SignUp2';
import SignUp3 from '../../screens/SignUp3';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const MainScreen = () => {

  const isSignedIn = useSelector(state => state.user.isSignedIn)
  console.log("screen ", isSignedIn)

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSignedIn ? (
          <>
            <Stack.Screen name='welcome' component={Welcome} />
            <Stack.Screen name='signUp' component={SignUp} />
            <Stack.Screen name='signIn' component={SignIn} />
            <Stack.Screen name='signUp2' component={SignUp2} />
            <Stack.Screen name='signUp3' component={SignUp3} />
          </>
        ) : (
          <Stack.Screen name='home' component={Home} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default MainScreen;
