import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Main from './screens/Main';


function App() {
  return (
    <Main />);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
