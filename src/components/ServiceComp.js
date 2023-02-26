
import React from 'react';
import { View, StyleSheet, TextInput, Text, Image, Dimensions } from 'react-native';
import ListItem2 from './ListItem2';



const { width, height } = Dimensions.get('window');

export default function ServiceComp({ navigation, title, cost, uri, onPress }) {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                <Text style={{
                    flexDirection: 'row', fontSize: 20, color: 'black', width: width * 0.66,
                    fontWeight: '400', padding: 10
                }}>
                    {title}
                </Text>
                <ListItem2 image={uri} onPress={onPress} />

            </View>

            <Text style={{
                flexDirection: 'row', fontSize: 18, color: 'black',
                fontWeight: 'bold', left: '10%', bottom: '8%'
            }}>
                {'\u20B9 '}{cost}
            </Text>

            <View style={{ borderBottomWidth: 1, width: width * 0.9, alignSelf: 'center', borderColor: 'rgb(224,224,224)' }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, marginBottom: 10
    },
    inputstyles: {
        fontSize: 18,
        fontFamily: 'Roboto',
        marginLeft: 10,
        fontWeight: 'bold',

    }
})
