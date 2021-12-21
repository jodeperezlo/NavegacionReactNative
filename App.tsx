import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import 'react-native-gesture-handler';
import {MenuLateral} from './src/navigatior/MenuLateral';

import {LogBox} from 'react-native';
import {AuthProvider} from './src/context/AuthContext';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuLateral />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: {children: JSX.Element}) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
