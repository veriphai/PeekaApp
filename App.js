import React, { useState } from "react"
import { View, Dimensions, StyleSheet, Text, } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigator from './src/navigation/BottomNavigator';
import ArtistSelection from "./src/screens/ArtistSelection";
const { width, height, } = Dimensions.get('window');


export default function App() {

  // const [category, setCategory] = useState()

  return (

    <NavigationContainer>
      <PeekaApp />
    </NavigationContainer>
  )
}

const Stack = createNativeStackNavigator();

const PeekaApp = () => {

  return (
    <Stack.Navigator>

      <Stack.Screen
        name="ArtistSelection"
        component={ArtistSelection}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};