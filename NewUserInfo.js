import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';


//this page has  text inputs, one for the first name, one for the last name
//this page also has a button to sign up

function NewUserInfo ({navigation}) {
    const [firstName, onChangeFirstName] = useState('');
    const [lastName, onChangeLastName] = useState('');

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>First Name:</Text>
        <TextInput 
            style={StyleSheet.input}
            onChangeText={firstName => onChangeFirstName(firstName)}
            value={firstName}
        />

        <Text>Last Name:</Text>
        <TextInput
            style={StyleSheet.input}
            onChangeText={lastName => onChangeLastName(lastName)}
            value={lastName}
        />

        <Button //sign up button
            title='Register'
            onPress={() => navigation.navigate('Class')}
        />
    </View>
    );
}
export default NewUserInfo