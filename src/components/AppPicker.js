import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import Pickeritem from './Pickeritem';


function AppPicker({ placeholder, item, selecteditem, onselectitem }) {
    const [ModalVisible, setModalVisible] = useState(false)
    return (<>

        <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
            <View style={styles.container}>
                <Image source={require('../assets/category.jpg')}
                    style={styles.iconstyles} />
                <Text style={{ width: '70%' }}>{selecteditem ? selecteditem.lable : placeholder}</Text>
                <Image source={require('../assets/downarrow3.jpg')}
                    style={styles.iconstyles2} />
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={ModalVisible} animationType={'slide'}>
            <Button title="close" onPress={() => setModalVisible(false)}> </Button>
            <FlatList data={item} keyExtractor={item => item.value.toString()}
                renderItem={({ item }) => <Pickeritem lable={item.lable} onPress={() => {
                    setModalVisible(false);
                    onselectitem(item);
                }} />} />
        </Modal>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        marginVertical: 10,
        width: '96%',
        alignSelf: 'center',
        elevation: 15,
        padding: 15,
        alignItems: 'center'

    },
    inputstyles: {
        fontSize: 18,
        fontFamily: 'Roboto',
        marginLeft: 10,

    },
    iconstyles: {
        width: 50,
        height: 50,
        borderRadius: 8,
        marginRight: 10

    },
    iconstyles2: {
        borderRadius: 15,
        width: 30,
        height: 30, bottom: 8,
        alignSelf: 'flex-end'
    }
})
export default AppPicker;