/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/navigation/stack/MainScreen';


function App(): JSX.Element {
  return (
    <NavigationContainer>
      <MainScreen/>
    </NavigationContainer>
  );
}
export default App;


