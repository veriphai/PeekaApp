import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native'



function PremiumScreen(props) {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 15, alignSelf: 'center',
                color: '#e6b800', fontWeight: 'bold',
            }}>Premium page </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 25, backgroundColor: '#fff'

    },
    delButton: {
        width: 50,
        height: 50,
        backgroundColor: 'red',
        position: 'absolute',
        right: 100,
        top: 30

    },
    addButton: {
        width: 50,
        height: 50,
        backgroundColor: 'green',
        position: 'absolute',
        top: 30,
        right: -140
    },
    imagestyle: {
        width: 360,
        height: 500,
        position: 'absolute',
        top: 100,
        right: -180

    }
})
export default PremiumScreen;