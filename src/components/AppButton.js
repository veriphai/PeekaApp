import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

function AppButton({ title, onPress }) {
    return (

        <TouchableOpacity style={styles.ButtonStyle} onPress={onPress}>
            <Text style={styles.textstyle}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    ButtonStyle: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
        width: "40%",
        margin: 60
    },
    textstyle: {

        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    }
})
export default AppButton;