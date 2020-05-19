import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Main from './src/pages/Main/index';

//Create a Component
const App = () => (
  <>
  <StatusBar barStyle="light-content" backgroundColor="#8B10AE"/>
  <Main />
  </>
);

//Export App - This line solved my issue
export default App;

