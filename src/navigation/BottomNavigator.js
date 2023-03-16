import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExploreScreen from '../screens/ExploreScreen'
import PremiumScreen from '../screens/PremiumScreen'
import LibraryScreen from '../screens/LibraryScreen';
import CoffeeAutonomous from '../screens/CoffeeAutonomous';
import ArtistSelection from '../screens/ArtistSelection';
import CardDetails from '../screens/CardDetails';
import LogInScreen from '../screens/LogInScreen';

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {

  return (
    <>
      <HomeStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ExploreScreen"
          component={ExploreScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ArtistSelection"
          component={ArtistSelection}
          options={{ headerShown: false }}
        />

        <HomeStack.Screen
          name="CoffeeAutonomous"
          component={CoffeeAutonomous}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="LibraryScreen"
          component={LibraryScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="CardDetails"
          component={CardDetails}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="LogInScreen"
          component={LogInScreen}
          options={{ headerShown: false }}
        />
      </HomeStack.Navigator>
    </>
  );
}

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get('window');

const BottomNavigator = ({ navigation }) => {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: 'white' }}>
      <Tab.Screen
        name="home"
        component={HomeStackScreen}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarIcon: () => (
            <SimpleLineIcons name="home" color={'black'} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="ExploreScreen"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarActiveTintColor: 'black',
          headerShown: false,
          headerShadowVisible: false,
          headerTitle: '',
          // header: () => null,
          tabBarIcon: () => (
            <Ionicons
              name="search-circle-outline"
              color={'black'}
              size={35}
            />
          ),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <Feather name="arrow-left" color={'black'} size={26} />
            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="LibraryScreen"
        component={LibraryScreen}
        options={{
          headerShown: false,
          title: ' Library ',
          tabBarLabel: 'Library',
          tabBarActiveTintColor: 'black',
          tabBarIcon: () => (
            <AntDesign name="book" color={"black"} size={28} />
          ),

        }}
      />

      <Tab.Screen
        name="PremiumScreen"
        component={PremiumScreen}
        options={{
          headerShown: false,
          title: ' Library ',
          tabBarLabel: 'Premium',
          tabBarActiveTintColor: 'black',
          tabBarIcon: () => (
            <MaterialCommunityIcons name="lightning-bolt-outline" color={"black"} size={30} />
          ),

        }}
      />


    </Tab.Navigator>
  );
};

export default BottomNavigator;
