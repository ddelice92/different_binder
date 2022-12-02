import { StackActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import Class from './Class';
import PrivateChats from './PrivateChats';
import Settings from './Settings';
import SignUp from './SignUp';
import NewUserInfo from './NewUserInfo';

//needed for navigation between screens
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen //screen opened when app starts
          name='Home'
          component={HomeScreen}
          options={{ title: 'Welcome to Binder!'}}
        />

        <Stack.Screen //first screen after sign in
          name='Class'
          component={Class}
        />

        <Stack.Screen  //page containing private chats
          name='PrivateChats'
          component={PrivateChats}
        />

        <Stack.Screen  //page containing settings
          name='Settings'
          component={Settings}
        />

        <Stack.Screen //page containing sign up information
          name='SignUp'
          component={SignUp}
        />

        <Stack.Screen //page containing sign up information
          name='NewUserInfo'
          component={NewUserInfo}
        />
      </Stack.Navigator>
    </NavigationContainer>


  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

    {/*<View style={styles.container}>
      <Text>Welcome to Binder!</Text>
      <StatusBar style="auto" />
  </View>*/}