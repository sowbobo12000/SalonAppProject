// import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from "react";
import { StyleSheet, Text, View } from 'react-native';
import CountryPicker from './CountryPicker';
import SelectState from './SelectState';

const CountryPicker2 = ({navigation}) => {

  return (
      <View style={styles.container}>
           <CountryPicker navigation={navigation}/>
      <SelectState navigation={navigation}/>
     
      </View>


  
  );
}
export default CountryPicker2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
