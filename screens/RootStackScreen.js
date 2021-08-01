import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import SignInScreen from './SignInScreen';
import SignUpScreen from './SignUpScreen';
import SignUpScreen2 from './SingUpScreen2';
import PhoneNumber from './PhoneInput';
import UploadCertificate from './UploadCertificate';

const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
    <RootStack.Navigator headerMode='none'>
        <RootStack.Screen name="PhoneNumber" component={PhoneNumber} />
        <RootStack.Screen name="SplashScreen" component={SplashScreen}/>
        <RootStack.Screen name="SignInScreen" component={SignInScreen}/>
        <RootStack.Screen name="SignUpScreen" component={SignUpScreen}/>
        <RootStack.Screen name="SignUpScreen2" component={SignUpScreen2}/>
        <RootStack.Screen name="UploadCertificate" component={UploadCertificate}/>
    </RootStack.Navigator>
);

export default RootStackScreen;