import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

import ListItem from './ListItem';

function Cards({ title, subTitle, image, }) {
    return (
        <View style={styles.cardStyles}>
            <Image style={styles.imagestyle} source={image} />
            <View>
                <Text style={styles.text1}>{title}</Text>
                <Text style={styles.text2}>{subTitle}</Text>
                <ListItem image={require('../assets/profile-pic.jpg')} title='User@123' subTitle='5 Listings' />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardStyles: {
        backgroundColor: 'white',
        borderRadius: 15,

        marginTop: 10,
        overflow: 'hidden',

    },
    text1: {
        fontWeight: 'bold',
        fontSize: 18,
        paddingBottom: 5,

    },
    text2: {
        fontWeight: 'bold',
        color: 'green',
        fontSize: 18,
    },
    imagestyle: {
        width: 365,
        height: 200,
    }
})

export default Cards;