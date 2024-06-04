/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import MainScreen from './src/navigation/stack/MainScreen';
// import Parent from './src/components/Parent';
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import { store , persistor } from './src/reduxTookit/store';
// import { store, persistor } from './src/store/store';
// import Counter from './src/components/Counter';
// import FetchData from './src/components/FetchData';
// import store from './src/reduxTookit/store';
// import Counter from './src/reduxTookit/Counter';
// import UserApi from './src/reduxTookit/UserApi';
import MainScreen from './src/navigation/stack/MainScreen';

function App(): JSX.Element {
  return (

    <NavigationContainer>
      <MainScreen />
    </NavigationContainer>

    // <Provider store={store}>
    //   <PersistGate persistor ={persistor}>
    //     <NavigationContainer>
    //       <MainScreen/>
    //     </NavigationContainer>
    //   </PersistGate>
    // </Provider>




    // <Provider store={store}>
    //   <PersistGate persistor={persistor}>
    //   {/* <TextDisplay/>
    //   <Counter/>
    //   <Saga/> 
    //   <FetchData/> */}
    //   </PersistGate>
    // </Provider>

    // {/* <Parent /> */}

    // <NavigationContainer>
    //   <MainScreen/>
    // </NavigationContainer>
  );
}
export default App;


