import React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//this is the first page seen after sign in
//it consists of a scrollable window containing classes,
//a button to go to the private chat page,
//and a button to go to the settings page
function Class({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Classes</Text>
            {/*list of enrolled classes will go here*/}
            <ScrollView>
                <Text>this is a class</Text>
                <Text>this is another class</Text>
                <Text>this is a third class</Text>
            </ScrollView>

            <Button //takes you to screen containg private chats
                title='Private Chats'
                onPress={() => navigation.navigate('PrivateChats')}
            />

            <Button
                title='Settings'
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
}
export default Class