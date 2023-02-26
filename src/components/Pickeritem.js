
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

function Pickeritem({ lable, onPress, image }) {
    return (
        <TouchableOpacity onPress={onPress}>

            <Text style={styles.text}>{lable}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text: {
        padding: 20,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'black'
    }
})


export default Pickeritem;



