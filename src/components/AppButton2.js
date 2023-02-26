import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';


function AppButton2({ title, onPress }) {
    return (

        <TouchableOpacity style={styles.ButtonStyle} onPress={onPress}>
            <Text style={styles.textstyle}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    ButtonStyle: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 15,
        width: "100%",
        position: 'absolute',
        top: 625
    },
    textstyle: {

        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'white'
    }
})
export default AppButton2;