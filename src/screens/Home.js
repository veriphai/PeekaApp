import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Avatar, withBadge } from 'react-native-elements';
import TypeWriter from 'react-native-typewriter'
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { useIsFocused } from '@react-navigation/native';

import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";

function Home({ navigation }) {

    // const [email, setEmail] = useState();
    const isFocused = useIsFocused();
    const [summeryData, setSummeryData] = useState();
    const [reedsData, setReedsData] = useState([]);

    const DATA = [
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bar',
            title: 'First Item fjfgjhfgykty dfhdgjdfgj',
            uri: 'data:image/jpeg;base64,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'
            , publisherName: 'Publisher name ',
            chapters: '1',
            paraTitle: 'Title',
            para: '',
        },
        {
            id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63gf',
            title: 'Second Item',
            uri: 'data:image/jpeg;base64,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'
            , publisherName: 'Publisher name ',
            chapters: '1',
            paraTitle: 'Title',
            para: '',
        },
        {
            id: '58694a0f-3da1-471f-bd96-145571e29d72gd',
            title: 'Third  ',
            uri: 'data:image/jpeg;base64,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'
            , publisherName: 'Publisher name ',
            chapters: '1',
            paraTitle: 'Title',
            para: '',
        },
        {
            id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28badf',
            title: 'First Item',
            uri: 'data:image/jpeg;base64,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'
            , publisherName: 'Publisher name ',
            chapters: '1',
            paraTitle: 'Title',
            para: '',
        },



    ];

    useEffect(() => {
        fetchSummeryData();
    }, [isFocused]);

    const fetchSummeryData = async () => {
        try {
            const params = new URLSearchParams();
            params.append('pageNo', 1);
            params.append('pageSize', 2);

            const response = await fetch(`http://ec2-65-0-104-33.ap-south-1.compute.amazonaws.com:8080/saaraansh/reeds?${params.toString()}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic cGVla2FVc2VyOnBlZWthQDEyMw==',
                },
            });
            const jsonData = await response.json();
            setReedsData(jsonData['reeds']);
            setSummeryData(jsonData['reeds'][0]['summaries'][0]['chapters'])
            console.log('hhhhhhhhhhhhhhhhhh', jsonData['reeds'])
        } catch (error) {
            console.error(error);
        }
    };




    const fetchSummeryData2 = async () => {
        try {
            const response = await fetch(`http://ec2-65-0-104-33.ap-south-1.compute.amazonaws.com:8080/saaraansh/reeds?${params.toString()}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Basic cGVla2FVc2VyOnBlZWthQDEyMw==',
                },
            });
            const jsonData = await response.json();

            console.log('hhhhhhhhhhhhhhhhhh', jsonData['reeds'])
        } catch (error) {
            console.error(error);
        }
    };

    const Item = ({ title, uri, publisherName, summaries }) => (

        <View style={styles.item}>

            <View style={{ flexDirection: 'row' }}>

                <Avatar rounded source={{ uri: uri }}
                    size={50} containerStyle={{ margin: 15 }} />

                <Text style={styles.title}
                    numberOfLines={2} ellipsizeMode={'tail'}>{title}</Text>
            </View>

            <View style={{
                flexDirection: 'row', alignItems: 'center',
                marginBottom: responsiveHeight(1.5),
            }}>

                <Text numberOfLines={1} style={{
                    fontFamily: 'Poppins-SemiBold', letterSpacing: 0.5,
                    fontSize: responsiveFontSize(1.9), marginLeft: responsiveWidth(22), width: responsiveWidth(49), color: 'grey'
                }}>{publisherName}</Text>

                <TouchableOpacity style={{
                    backgroundColor: 'rgb(224,224,224)', width: responsiveWidth(20), alignItems: 'center',
                    borderRadius: 20, height: responsiveHeight(3.6), justifyContent: 'center'
                }}  >
                    <Text style={{
                        fontSize: responsiveFontSize(1.8), alignSelf: 'center',
                        color: 'black', fontFamily: 'Poppins-Bold', textAlignVertical: 'center'
                    }}>Follow</Text>

                </TouchableOpacity>

            </View>

            <ScrollView>

                <FlatList
                    data={summaries[0].chapters}
                    renderItem={({ item }) => <ChaptersData item={item} />}
                    keyExtractor={item => item.id}

                />
            </ScrollView>



            <View style={{ flexDirection: "row", margin: 10, paddingLeft: '1.5%', alignSelf: 'center' }}>

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
                    marginRight: responsiveWidth(6), color: 'grey',
                    fontSize: responsiveFontSize(1.7), marginLeft: responsiveWidth(6), fontFamily: 'Poppins-SemiBold',
                }}>read time - ch 1</Text>

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


        </View >
    );

    const ChaptersData = ({ channelName, imageUrl, item, channelId }) => (
        <View style={{ paddingLeft: 15 }}>

            <Text numberOfLines={1} style={{
                fontSize: responsiveFontSize(1.8), fontFamily: 'Poppins-SemiBold',
                color: '#e6b800',
            }}>chapter :
                {item.number}
            </Text>

            <Text numberOfLines={1} style={{
                fontSize: responsiveFontSize(2), fontFamily: 'Poppins-Bold', marginTop: responsiveHeight(0.2),
                color: 'black', marginBottom: responsiveHeight(1)
            }}>
                {item.name}
            </Text>
            <TypeWriter style={{ height: responsiveHeight(48), letterSpacing: 0.5, lineHeight: 32, fontFamily: 'Poppins-SemiBold', color: 'grey', textAlign: 'left', fontSize: responsiveFontSize(2), }} numberOfLines={11} typing={2}>
                {item.data}
            </TypeWriter>
        </View>
    );

    return (
        < View style={styles.Screen}>

            <View style={{
                margin: 5, flexDirection: 'row', marginBottom: responsiveHeight(1.5),
                padding: 3, marginTop: responsiveHeight(1.5), alignItems: 'center', justifyContent: 'center'
            }}>
                <Text style={{
                    fontSize: responsiveFontSize(2.5), fontFamily: 'Poppins-Bold',
                    color: 'black',
                }}>FOR YOU</Text>

                <Entypo
                    name={'chevron-down'}
                    color={'black'}
                    size={15}
                    style={{ left: 3, bottom: 2 }}
                />



                <View style={{
                    backgroundColor: 'rgb(224,224,224)', flexDirection: 'row', width: responsiveWidth(44),
                    height: responsiveHeight(3.5), borderRadius: 10,
                    marginLeft: responsiveWidth(17),
                    alignSelf: 'center', marginRight: 5, alignItems: 'center'
                }}>
                    <Ionicons
                        name={'gift-outline'}
                        color={'red'}
                        size={18}
                        style={{ alignSelf: 'center', left: 5 }}
                    />

                    <Text style={{
                        fontSize: responsiveFontSize(1.5), marginLeft: 9, fontFamily: 'Poppins-Bold',
                        color: 'black', letterSpacing: 0.5, alignSelf: 'center'
                    }}>EXCLUSIVE ACCESS</Text>

                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CoffeeAutonomous')}>

                    <Feather
                        name={'settings'}
                        color={'black'}
                        size={22}
                        style={{ alignSelf: 'center', marginLeft: 5 }}
                    />
                </TouchableOpacity>
            </View>

            {/* <FlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} uri={item.uri} item={item} publisherName={item.publisherName} paraTitle={item.paraTitle} chapters={item.chapters} />}
                keyExtractor={item => item.id}

            /> */}

            <View style={{ height: responsiveHeight(80.2) }}>

                <SwiperFlatList
                    autoplayDelay={1}
                    vertical
                    data={reedsData}
                    renderItem={({ item }) => <Item title={item.name} uri={item.thumbnail}
                        summaries={item.summaries} publisherName={item.channelName}
                    // chapters={}
                    // paraTitle={item.paraTitle} 
                    />}
                />
            </View>
        </ View >
    );
}
const styles = StyleSheet.create({
    Screen: {
        flex: 1, backgroundColor: '#fff',
        width: responsiveWidth(100),

    },

    title: {
        fontSize: responsiveFontSize(2.5), fontFamily: 'Poppins-Bold',
        color: 'black', width: responsiveWidth(74),
        margin: 5, marginTop: 12,
        fontWeight: '500', letterSpacing: 0.5,
    },
    item: {
        borderColor: 'rgb(224,224,224)', borderWidth: 1, marginTop: 5, marginBottom: 5, backgroundColor: 'white',
        width: responsiveWidth(94), alignSelf: 'center', borderRadius: 15, elevation: 2, height: responsiveHeight(79)

    },

})
export default Home;