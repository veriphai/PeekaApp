import React, { useState } from 'react';
import { FlatList, Image, ScrollView, View, Dimensions, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Cards from '../components/Cards';
const { width, height } = Dimensions.get('window');


function Slider() {

    const [imgActive, setImageActive] = useState(0);


    const Images = [

        ('https://snappyserv.com/assets/images/b3.png'),
        ('https://snappyserv.com/assets/images/b1.png'),
        ('https://snappyserv.com/assets/images/b2.png')
    ]

    const onchange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
            if (slide != imgActive) {
                setImageActive(slide);
            }

        }

    }

    return (
        <SafeAreaView>
            <View style={{
                width: width * 0.95, height: height * 0.20, borderRadius: 20,
                backgroundColor: 'rgb(224,224,224)', margin: 10, alignSelf: 'center'
            }}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                >
                    {Images.map((e, index) =>
                        <Image
                            style={{
                                width: width * 0.95, height: height * 0.20,
                                borderRadius: 20, alignSelf: 'center'
                            }}
                            key={e}
                            resizeMode={'stretch'}
                            source={{ uri: e }}
                        />)}
                </ScrollView>

                <View style={{
                    flexDirection: 'row', position: 'absolute'
                    , alignSelf: 'center', bottom: 2
                }}>

                    {Images.map((e, index) =>
                        <Text key={e} style={imgActive == index ? styles.dotActive : styles.dotNotActive}>
                            ⬤
                        </Text>
                    )
                    }

                </View>

            </View>
        </SafeAreaView>
    )
} const styles = StyleSheet.create({
    dotActive: {
        margin: 3,
        color: 'black'
    },
    dotNotActive: {
        margin: 3,
        color: 'rgb(224,224,224)'
    },
})

export default Slider;