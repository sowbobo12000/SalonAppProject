import React, { Component,useState, useRef, useEffect} from 'react';
import { Text, View, Image,Modal,StyleSheet} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';



// type Props = {
//   visible: boolean;
//   items: string[];
//   title: string;
//   pickerValue?: string;
//   // onClose: () => void;
//   // onSelect: (value: string) => void;
//   value?: string;
// }

const CountryPicker = ({navigation
  // // visible,
  // // items,
  // title,
  // // onClose,
  // // onSelect,
  // value
}) => {
  
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
 


  
 

  // useEffect( () => {
  //   if (value) {
  //     setPickerValue(value);
  //   }
 

  // }, [value]);

  return (
    <>

      <Modal animated transparent visible = {visible} animationType="fade">
        <View style = {styles.container}>
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
      <TouchableOpacity 
            style={styles.button}
            onPress={() => {
                setVisible(true);
            }}>
                 {/* <CountryPicker visible ={false} title={"States"} items={items}/> */}
                <Text style={styles.buttonText}>{pickerValue || 'Select a state'}</Text>

          </TouchableOpacity>
    
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
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  pickerContainer: {
    height: 200,
    width: '100%',
    backgroundColor: 'white',
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding:10,

  },
  button: {
    marginTop: 20,
    height: 50,
    width: 200,
    marginLeft:100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7CDB8A',
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 1,
      height: 5,
    }
  },
  buttonMain: {
    width: '100%', 
    height: 90, 
    backgroundColor: '#E66950', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left:0
},
  buttonRight: {
      width: '50%', 
      height: 90, 
      backgroundColor: '#E66950', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0,
      right:0
  },
  buttonLeft: {
    width: '50%', 
    height: 90, 
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
  }
})

export default CountryPicker;
// const CountryPicker = () => {
//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'Apple', value: 'apple'},
//     {label: 'Banana', value: 'banana'}
//   ]);

//   return (
//     <DropDownPicker
//       placeholder="Select an item"
//       open={open}
//       value={value}
//       items={items}
//       setOpen={setOpen}
//       setValue={setValue}
//       setItems={setItems}
//     />
//   );
// }

// export default CountryPicker;