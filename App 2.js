import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from 'react-native';
import Phone from './components/PhoneInput';
import Navigator from './routes/homeStack';
// import App3 from './App3';

export default function App() {
  const [phone, setPhone] = useState("");
  return (
    
      
      <Navigator/>
      // <App3/>


  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
