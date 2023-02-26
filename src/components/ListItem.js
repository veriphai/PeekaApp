import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');

function ListItem({ title, icon, image, onPress, renderRightActions, }) {
    return (
        <>

            <TouchableOpacity onPress={onPress} underlayColor='rgb(240,240,240)'>
                <View style={styles.container}>
                    <View style={styles.imagecontainerstyles}>
                        {/* <MaterialCommunityIcons name={icon} color="black" size={56} /> */}
                        <Image style={styles.imagestyles} source={image} />
                    </View>
                    <Text style={styles.text1} >{title}</Text>
                </View>

            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 3, paddingBottom: 5, margin: 5
    },
    imagecontainerstyles: {
        width: width * 0.3, alignItems: 'center', justifyContent: 'center',
        height: height * 0.12, backgroundColor: 'rgb(224,224,224)',
        borderRadius: 8, borderColor: '#007399'
    },
    imagestyles: {
        width: '70%',
        height: '95%',
    },
    text1: {
        fontSize: 15, color: 'black', width: width * 0.3,
        fontWeight: '400', textAlign: 'center',

    },
    text2: {
        fontSize: 12,
        color: "red",
    }

})

export default ListItem;