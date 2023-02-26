import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

function ListItemDeleteAction() {
    return (
        <TouchableWithoutFeedback >
            <View style={styles.container}>
                <Image source={require('../assets/trashcan2.jpg')} style={styles.imagestyles} />
            </View>
        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff5252',
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    imagestyles: {
        width: 70,
        height: 90,
    }
})
export default ListItemDeleteAction;