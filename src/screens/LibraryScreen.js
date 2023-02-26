// in home screen at addnew button
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Pressable, Modal } from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import Foundation from 'react-native-vector-icons/Foundation';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const LibraryScreen = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 15, alignSelf: 'center',
                color: '#e6b800', fontWeight: 'bold',
            }}>Library page </Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 25,
        padding: 15
    },

    Text: {
        color: 'black', fontSize: 20, margin: '2%', left: '5%', fontWeight: 'bold',
    },
    icns: {
        flexDirection: 'row', margin: 10, color: 'black', left: '2%', alignItems: 'center'
    },
    text: {
        fontWeight: 'bold', fontSize: 15, left: '5%',
        color: 'black', margin: "1.5%",
    },
    // modals
    modalView: {
        opacity: 0.89,
        alignItems: "center",
        height: '100%', width: '100%', justifyContent: 'center',
        elevation: 5, backgroundColor: '#f0f8ff',
    },

    buttonClose: {
        height: '23%', width: '45%', margin: '2%',
        backgroundColor: "white",
        borderRadius: 10,
    },
    textStyle: {
        color: 'black',
        fontSize: 10,
        textAlign: "center",
        marginTop: '5%',
    },
})
export default LibraryScreen;

