import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ViewClientAllHistory from '../screens/ViewClientAllHistory';
import CollectionDetails from '../screens/CollectionDetails'
import LinearGradient from 'react-native-linear-gradient';

export default function TransactionStackScreen() {
    const Tab = createMaterialTopTabNavigator();
    return (
        <Tab.Navigator initialRouteName='CollectionDetails'
            screenOptions={{
                tabBarStyle: { position: 'relative', },
                tabBarActiveBackgroundColor: () => (
                    <LinearGradient
                        colors={['#b299e6', '#FFDEAD']}
                        style={StyleSheet.absoluteFill}
                    />
                ),
                tabBarInactiveBackgroundColor: () => (
                    <LinearGradient
                        colors={['#FFDEAD']}
                        style={StyleSheet.absoluteFill}
                    />),
            }}
        >
            <Tab.Screen name="CollectionDetails" component={CollectionDetails}
                options={{ tabBarLabel: 'Recents', }}
            />
            <Tab.Screen name="ViewClientAllHistory" component={ViewClientAllHistory}
                options={{ tabBarLabel: 'All', }} />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})