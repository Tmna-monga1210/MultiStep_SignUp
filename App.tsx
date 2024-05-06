/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreens from './src/screens/StackScreen/HomeScreen';


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <HomeScreens/>
    </NavigationContainer>
  );
}
export default App;


