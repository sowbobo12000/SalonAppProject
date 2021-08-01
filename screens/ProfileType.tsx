import React, {useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Text,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import Card from '../components/Card';

const ProfileType = ({navigation}) => {
    const [profiles, setProfiles] = useState([
        { id:'1',title: "Stylist",img: "",content: "Field style requests, complete appointments, receive payments, make a business."},
        { id:'2',title: "Client",img: "",content: "Send style requests, get your hair cut, payin-app."},
        { id:'3',title: "Salon",img: "",content: "Accept verified stylists, manage salon seating."}
    ]);

    return (
        <>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
            <SafeAreaView style={styles.wrapper}>
                <Text style={{marginTop:200,marginBottom:15,color:'#292929'}}>Select a profile type.</Text>
                <Text style={{marginBottom:20,color:'#7E7E7E'}}>What type of profile do you want to create?</Text>
                <FlatList
                    data={profiles}
                    renderItem= {({item}) => (
                        <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('SelectState');
                        }}
                        >
                        <Card>
                            <Text>{item.title}</Text>
                            <Text>{item.content}</Text>
                        </Card>
                        </TouchableOpacity>
                    )}
                    keyExtractor = {item => item.id}
                />
                <TouchableOpacity 
                    style={styles.button2}
                    onPress={() => {
                        navigation.navigate('CountryPicker2');
                    }}>
                        <Text style={styles.buttonText}>Confirm</Text>

          </TouchableOpacity>
            </SafeAreaView>
                
        </View>
        </>

    );

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#fff',
    },
    wrapper: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      marginTop: 20,
      height: 50,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E66950',
      shadowColor: 'rgba(0,0,0,0.4)',
      shadowOffset: {
        width: 1,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,
      elevation: 10,
    },
    button2: {
        width: '100%', 
        height: 70, 
        backgroundColor: '#E66950', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
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
  });
export default ProfileType;

