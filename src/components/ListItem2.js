import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity, } from 'react-native'
import { Swipeable } from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const { width, height } = Dimensions.get('window');
import { Button, TextInput } from 'react-native-paper';

function ListItem2({ title, icon, image, onPress, renderRightActions, }) {

    const [pressed, setPressed] = useState(false)

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

                <View style={{
                    backgroundColor: 'white', width: width * 0.25, position: 'absolute', top: 60, borderColor: '#007399',
                    height: height * 0.05, borderRadius: 6, alignSelf: 'center', justifyContent: 'center', borderWidth: 1
                }} >
                    <TouchableOpacity>
                        <Text style={{
                            flexDirection: 'row', fontSize: 18, color: '#007399',
                            fontWeight: 'bold', textAlign: 'center'
                        }}>
                            Add
                        </Text>
                    </TouchableOpacity>


                </View>

            </TouchableOpacity>

        </>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 3, marginLeft: '3%', paddingBottom: 10
    },
    imagecontainerstyles: {
        width: width * 0.3, alignItems: 'center', justifyContent: 'center',
        height: height * 0.12, backgroundColor: 'rgb(224,224,224)',
        borderRadius: 8,
    },
    imagestyles: {
        width: '100%',
        height: '100%', borderRadius: 8,
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

export default ListItem2;