import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Text,
  Modal
} from 'react-native';
import { Icon } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker'


const items = ['United States','South Korea'];
const visible = true;
const title="States";

const SelectState = ({navigation}) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [pickerValue, setPickerValue] = useState<string>(null);
  const items = ['United States','South Korea'];
  const onClose  = () => {
    setVisible(false)}
  const onSelect = (picker: string) => {
    setVisible(false)
    setPickerValue(picker)
  }
  const title = "States";
 
    return (
        <>
        <Modal animated transparent visible = {visible} animationType="fade">
          <View style = {styles.modalContainer}>
            <View style = {styles.pickerContainer}>
              <View style = {styles.header}>
                <TouchableOpacity  onPress= {onClose}>
                  <Icon name="close"/>

                </TouchableOpacity>
                
                <Text>{title || 'Placeholder'}</Text>
                <Icon name="check" onPress={ () => onSelect(pickerValue)}/>
              </View>
              <Picker selectedValue= {pickerValue} onValueChange= { (value) =>setPickerValue(value) }>
                {items.map( (item, index) => (
                  <Picker.Item key={index+1} value={item} label={item} /> 
                ))}
              </Picker>

            </View>

          </View>
          </Modal>
         
        <View style={styles.container}>
          <SafeAreaView style={styles.wrapper}>
              <Text style={{marginTop:80,marginBottom:15}}>Select your state(s)</Text>
              <Text style={{marginBottom:20,color:'#7E7E7E'}}>Where do you cut hair?</Text>
            
       
  
          <TouchableOpacity 
              style={styles.button}
              onPress={() => {
                  setVisible(true);
              }}>
                    {/* <CountryPicker visible ={false} title={"States"} items={items}/> */}
                  <Text style={styles.buttonText}>{pickerValue || 'Select a state'}</Text>

            </TouchableOpacity>

           
                  
       

          </SafeAreaView>

        </View>
        {pickerValue == null ? 
            <TouchableOpacity 
                style={styles.buttonMain}
                onPress={() => {
                    navigation.navigate('PhoneInput');
                }}>
                    <Text style={styles.buttonText}>Continue</Text>

              </TouchableOpacity> :
              <>

            <TouchableOpacity 
              style={styles.buttonRight}
              onPress={() => {
                  navigation.navigate('UploadCertificate');
              }}>
                  <Text style={styles.buttonText}>Continue</Text>

              </TouchableOpacity>
            

          <TouchableOpacity 
              style={styles.buttonLeft}
              onPress={() => {
                  navigation.navigate('PhoneInput');
              }}>
                  <Text style={styles.buttonText}>Add State</Text>

          </TouchableOpacity>
  
          </>
          }
         

        
        </>

    );

};


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#fff',
    },
    modalContainer: {
      flex:1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 20,
      height: 50,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#7CDB8A',
      shadowColor: 'rgba(0,0,0,0.4)',
      shadowOffset: {
        width: 1,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    buttonMain: {
      width: '100%', 
      height: 70, 
      backgroundColor: '#E66950', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      left:0
  },
    buttonRight: {
        width: '50%', 
        height: 70, 
        backgroundColor: '#E66950', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        right:0
    },
    header: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding:10,
  
    },
    buttonLeft: {
      width: '50%', 
      height: 70, 
      backgroundColor: '#292929', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      left:0
  },
    buttonText:{
      color: 'white',
      fontSize: 15,
      marginBottom: 30,
    },
    redColor: {
      backgroundColor: '#F57777'
    },
    message: {
      borderWidth: 1,
      borderRadius: 5,
      padding: 20,
      marginBottom: 20,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    pickerContainer: {
      height: 200,
      width: '100%',
      backgroundColor: 'white',
    }
  });
export default SelectState;

