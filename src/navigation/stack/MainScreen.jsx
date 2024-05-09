import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from '../tabs/MainTabs';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen
          name='HomeScreen'
          component={MainTabs}
          options={{
            headerShown: false,
          }} />
      </Stack.Navigator>
    </>
  )
}

export default MainScreen
