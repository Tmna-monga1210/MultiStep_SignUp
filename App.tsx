/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// import 'react-native-gesture-handler';

import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store/reduxStore';
import { PersistGate } from 'redux-persist/es/integration/react';
import MainScreen from './src/navigation/stack/MainScreen';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MainScreen />
      </PersistGate>
    </Provider >
  );
}
export default App;


