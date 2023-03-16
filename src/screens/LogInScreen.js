import { View, Text } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native'
import { ScrollView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native'

export default function LogInScreen({ navigation }) {
    return (
        <ScrollView>

            <Image source={require('../assets/LoginScreenpic.png')} resizeMode="cover" style={styles.image} />
            <Text style={{
                fontFamily: 'Poppins-Bold',
                color: 'black', fontSize: responsiveFontSize(3.8), marginLeft: responsiveWidth(5)

            }}>Peeka</Text>

            <Text style={{
                fontSize: responsiveFontSize(2), fontFamily: 'Poppins-Bold',
                color: '#e6b800', marginLeft: responsiveWidth(5.4), bottom: 13
            }}>chapter dhdf dhhdfh
            </Text>

            <View>
                <Text style={{
                    fontFamily: 'Poppins-Bold',
                    color: 'black', fontSize: responsiveFontSize(1.8), marginLeft: responsiveWidth(5)

                }}>Login with</Text>

                <View style={{
                    width: responsiveWidth(90), borderWidth: 1.8, height: 40, flexDirection: 'row', justifyContent: 'space-between'
                    , alignSelf: 'center', margin: 5, borderRadius: 30, borderColor: 'black', alignItems: 'center'
                }}>
                    <TextInput
                        keyboardType='phone-pad'
                        style={{ marginLeft: responsiveWidth(2), }}
                        placeholder={"Enter your phone number"}
                        placeholderTextColor="black"

                    />
                    <TouchableOpacity style={{
                        backgroundColor: 'black', width: 30, alignItems: 'center',
                        height: 30, borderRadius: 20, justifyContent: 'center', right: 5
                    }}>
                        <Ionicons
                            name={'send-outline'}
                            color={'white'}
                            size={16}
                            style={{ left: 2 }}
                        />
                    </TouchableOpacity>
                </View>

                <Text style={{
                    fontFamily: 'Poppins-Bold', alignSelf: 'center', right: 8,
                    color: 'black', fontSize: responsiveFontSize(1.8), marginLeft: responsiveWidth(5)

                }}>or</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: responsiveHeight(6) }}>

                    <TouchableOpacity style={{
                        width: responsiveWidth(44), height: 40, flexDirection: 'row', marginRight: 5,
                        alignSelf: 'center', borderRadius: 30, justifyContent: 'center', backgroundColor: 'black', alignItems: 'center'
                    }} onPress={() => navigation.navigate('ArtistSelection')}>
                        <Image
                            source={require('../assets/google-logo.png')}
                            style={[
                                {
                                    width: 17,
                                    height: 17,
                                },
                            ]}
                        />
                        <Text style={{
                            fontFamily: 'Poppins-Regular', alignSelf: 'center', top: 2,
                            color: 'white', fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(2)

                        }}>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        width: responsiveWidth(44), borderWidth: 1.8, height: 40, flexDirection: 'row', marginLeft: 5,
                        alignSelf: 'center', borderRadius: 30, justifyContent: 'center', borderColor: 'black', alignItems: 'center'
                    }}>
                        <AntDesign
                            name={'apple1'}
                            color={'black'}
                            size={18}
                            style={{ marginLeft: responsiveWidth(2) }}
                        />
                        <Text style={{
                            fontFamily: 'Poppins-Bold', alignSelf: 'center', top: 3,
                            color: 'black', fontSize: responsiveFontSize(2), marginLeft: responsiveWidth(1)

                        }}>Apple</Text>
                    </TouchableOpacity>
                </View>



            </View>
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    image: {
        alignSelf: 'center',
        width: responsiveWidth(100),
        height: responsiveHeight(60),
        marginBottom: responsiveHeight(2)

    }
})