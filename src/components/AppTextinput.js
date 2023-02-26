import React from 'react';
import { View, StyleSheet, TextInput, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

function AppTextinput({ name, image, ...otherprops }) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name={name}
                size={24}
                color='black'
            />
            <TextInput style={styles.inputstyles} {...otherprops} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10, flexDirection: 'row',
        width: '95%', padding: 3,
        backgroundColor: 'white',
        elevation: 10, borderRadius: 10,
        color: 'black', alignItems: 'center',
        fontSize: 16,

    },
    inputstyles: {
        fontSize: 18,
        fontFamily: 'Roboto',
        // marginLeft: 10,
        fontWeight: 'bold',

    }
})
export default AppTextinput;