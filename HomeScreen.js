import React, {useState} from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { TextInput } from 'react-native-web';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


//this is the first page seen when the app opens
//it consists of a text field for an email address,
//a text field for a password,
//a sign in button,
//and a sign up button
function HomeScreen({ navigation }) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Sign In</Text>
            {/*this is the email input box*/}
            <TextInput
                style={StyleSheet.input}
                onChangeText={email => onChangeEmail(email)}
                value={email}
            />

            {/*this is the password input box*/}
            <TextInput
                style={StyleSheet.input}
                onChangeText={password => onChangePassword(password)}
                value={password}
            />
            <Button
                title='Sign In'
                onPress={() => navigation.navigate('Class')}
            />

            <Button
                title='Sign Up'
                onPress={() => navigation.navigate('SignUp')}
            />
        </View>
    );
}
export default HomeScreen