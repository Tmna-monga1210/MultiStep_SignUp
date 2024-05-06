import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../Tabs/Tabs';

const Stack = createNativeStackNavigator();

const HomeScreens = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={Tabs}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </>
  )
}

export default HomeScreens;
