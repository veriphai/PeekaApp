import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, withBadge } from 'react-native-elements';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { ScrollView } from 'native-base';
import { FlatList } from 'react-native';
import { NativeBaseProvider } from 'native-base';

export default function CardDetails({ route, navigation }) {

    const [showFullData, setShowFullData] = useState(false)
    const [tranList, setTranList] = useState(['dummy'])

    const SelectandUnselectItem = (id) => {
        let cond = tranList.find(data => data === id)

        if (cond != id) {
            setTranList(list => [...list, id])
        }

        else {

            setTranList(
                tranList.filter((itemIndex) => itemIndex !== id)
            );

            console.log('nnnnnnnnnnnnnnn', tranList,)

        }

    }

    const getItemStyles = id => {
        if (tranList.find(data => data === id)) return 'black';
        if (tranList.find(data => data != id)) return 'white';

        return 'white';
    };

    const getItemTextStyles = id => {
        if (tranList.find(data => data === id)) return 'white';
        if (tranList.find(data => data != id)) return 'black';
        return 'black';
    };

    const getItemData = id => {
        if (tranList.find(data => data === id)) return true;
        if (tranList.find(data => data != id)) return false;
        return false;
    };

    const getItemArrow = id => {
        if (tranList.find(data => data === id)) return true;
        if (tranList.find(data => data != id)) return false;
        return false;
    };


    const ChaptersList = ({ name, number, data, id, }) => (

        <TouchableOpacity style={{ width: responsiveWidth(100) }}
            onPress={() => { setShowFullData(!showFullData), SelectandUnselectItem(id) }}
        >

            <View style={[{ flexDirection: 'row', padding: '3%', }, { backgroundColor: getItemStyles(id) }]}>

                <Text style={{
                    fontSize: responsiveFontSize(2.2), fontFamily: 'Poppins-Bold',
                    color: '#e6b800', marginLeft: responsiveWidth(5), marginRight: responsiveWidth(3),
                }}
                > {number}</Text>

                <Text style={[{
                    fontSize: responsiveFontSize(2), fontFamily: 'Poppins-Medium', marginTop: responsiveHeight(0.2),
                    marginBottom: responsiveHeight(0.5), width: responsiveWidth(76)
                }, { color: getItemTextStyles(id) }]}
                    numberOfLines={3} ellipsizeMode={'tail'}> {name}</Text>

                <Entypo
                    name={getItemArrow(id) === false ? 'chevron-right' : 'chevron-down'}
                    color={getItemArrow(id) === false ? 'black' : 'white'}
                    size={20}
                    style={{ alignSelf: 'center', bottom: 10 }}
                />

            </View>

            {getItemData(id) === true ? (<View>
                <Text style={{
                    fontSize: responsiveFontSize(1.8), fontFamily: 'Poppins-Regular', marginTop: responsiveHeight(1), marginLeft: responsiveWidth(5),
                    color: 'black', textAlign: 'left', margin: 2, lineHeight: 28, alignSelf: 'center', width: responsiveWidth(90)
                }}
                > {data}</Text>
            </View>) : null}

            <View style={{ borderColor: 'rgb(224,224,224)', borderWidth: 0.6, }} />

        </TouchableOpacity>
    );

    return (
        <View style={{ flex: 1 }} >
            <View style={{ flexDirection: 'row' }}>

                <Ionicons
                    name={'arrow-back'}
                    color={'black'}
                    size={30} onPress={() => navigation.navigate('Home')}
                    style={{ margin: responsiveWidth(2), }}
                />
                <Text style={styles.title}>{route.params.item.name}</Text>
            </View>

            <View style={{ flexDirection: 'row', margin: 4, justifyContent: 'center' }}>

                <Avatar rounded source={{ uri: route.params.item.thumbnail }}
                    size={30} containerStyle={{ margin: 5, }} />

                <Text numberOfLines={1} style={{
                    fontFamily: 'Poppins-SemiBold', letterSpacing: 0.5, alignSelf: 'center',
                    fontSize: responsiveFontSize(1.8), marginLeft: responsiveWidth(1), width: responsiveWidth(60), color: 'grey'
                }}>{route.params.item.channelName}</Text>

                <TouchableOpacity style={{
                    backgroundColor: 'rgb(224,224,224)', width: responsiveWidth(18), alignItems: 'center',
                    borderRadius: 20, height: responsiveHeight(3.4), justifyContent: 'center', alignSelf: 'center',
                }}  >
                    <Text style={{
                        fontSize: responsiveFontSize(1.6), alignSelf: 'center',
                        color: 'black', fontFamily: 'Poppins-Bold', textAlignVertical: 'center'
                    }}>Follow</Text>

                </TouchableOpacity>
            </View>

            <View style={{
                flexDirection: "row", backgroundColor: 'rgb(224,224,224)', justifyContent: 'center', alignItems: 'center', elevation: 8,
                alignSelf: 'center', width: responsiveWidth(100), height: responsiveHeight(5)
            }}>

                <TouchableOpacity>
                    <AntDesign
                        name={'like2'}
                        color={'black'}
                        size={24}
                        style={{ marginRight: responsiveWidth(5) }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <AntDesign
                        name={'dislike2'}
                        color={'black'}
                        size={24}
                        style={{ marginRight: responsiveWidth(6) }}
                    />
                </TouchableOpacity>

                <Text numberOfLines={1} style={{
                    color: 'grey', textAlign: 'center',
                    fontSize: responsiveFontSize(1.7), width: responsiveWidth(45), fontFamily: 'Poppins-SemiBold',
                }}>read time • ch 1</Text>

                <TouchableOpacity>
                    <Feather
                        name={'share-2'}
                        color={'black'}
                        size={22}
                        style={{ alignSelf: 'center', marginLeft: responsiveWidth(6) }}
                    />
                </TouchableOpacity>

                <TouchableOpacity>
                    <Feather
                        name={'bookmark'}
                        color={'black'}
                        size={24}
                        style={{ alignSelf: 'center', marginLeft: responsiveWidth(5) }}
                    />
                </TouchableOpacity>
            </View>
            <NativeBaseProvider>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {route.params.item2.map((item, index,) => {
                            console.log('first', item)

                            return ChaptersList(item,)

                        })}
                    </View>
                </ScrollView>

            </NativeBaseProvider>

            {/* <FlatList
                data={route.params.item2}
                renderItem={({ item }) => <ChaptersList item={item} id={item.id}
                    number={item.number} name={item.name} data={item.data} />}
                keyExtractor={item => item.id}

            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    title: {
        fontSize: responsiveFontSize(2.5), fontFamily: 'Poppins-Bold',
        color: 'black', marginTop: responsiveHeight(1),
        margin: 5, width: responsiveWidth(80),
        fontWeight: '500', letterSpacing: 0.5,
    },
})