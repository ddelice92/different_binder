import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import NewUserInfo from './NewUserInfo';
import { auth, createUserWithEmailAndPassword } from 'firebase/auth';

//const auth = getAuth();
//const [email, onChangeEmail] = useState('');
//const [password, onChangePassword] = useState('');
//const [confirmation, onChangeConfirmation] = useState('');

function createUser({email, password, navigation}) {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
     })
    .catch((error => {
    const errorCode = error.code;
    const errorMessage = error.message;
    }))

    //navigation.navigate('NewUserInfo')
}



//this page has 3 text inputs, one for the email, one for the password,
//and one to confirm the password
//this page also has a button to sign up
//when sign up is pressed, first we check to see if the email is already in use,
//if the email is available then we make sure that the passwords match
//if the passwords match a new user is successfully made and screen navigates to
//the user setup page
function SignUp ({navigation}) {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmation, onChangeConfirmation] = useState('');

    {/*function createUser() {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
         })
        .catch((error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        }))

        return (
            navigation.navigate('NewUserInfo')
        )
    }*/}

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Sign Up</Text>

        
        <TextInput //email box
            style={StyleSheet.input}
            onChangeText={email => onChangeEmail(email)}
            value={email}
        />

        <TextInput //password box
            style={StyleSheet.input}
            onChangeText={password => onChangePassword(password)}
            value={password}
        />

        <TextInput //password confirmation box
            style={StyleSheet.input}
            onChangeText={confirmation => onChangeConfirmation(confirmation)}
            value={confirmation}
        />

        <Button //sign up button
            title='Sign Up'
            onPress={createUser({email, password})}
        />
    </View>
    );
}
export default SignUp