import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Keyboard, Dimensions } from 'react-native';
import AppButton from '../components/AppButton';


import AppTextinput from '../components/AppTextinput';
import AppTextinput2 from '../components/ServiceComp';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

function ExploreScreen({ navigation }) {

    const [inputs, setInputs] = useState({ email: '', password: '', });
    const [errors, setErrors] = useState('');
    const [valid, setvalid] = useState();
    const [showPassword, setShowPassword] = useState(true);
    const [icon, setIcon] = useState('eye-off');

    const handleOnChange = (text, input) => {
        setInputs(prevState => ({ ...prevState, [input]: text }));
    };

    const handleError = (errorMessage, input) => {
        setErrors(prevState => ({ ...prevState, [input]: errorMessage }));
    };

    const emailSignInPress = async (email, password) => {
        Keyboard.dismiss();
        if (!inputs.email) {
            handleError('Please  enter email address', 'email');
            setvalid(false);
        }
        //  else if (handleEmailValidation(inputs.email) === false) {

        //     valid = false;
        //     handleError('Please enter valid email address', 'email');
        // }
        if (!inputs.password || inputs.password.length < 6) {
            handleError('Please enter password', 'password');
            setvalid(false);
        }
        setvalid(true)
        if (valid) {
            navigation.navigate('Home')
        }
    };


    return (
        <ScrollView contentContainerStyle={styles.Screen} automaticallyAdjustKeyboardInsets={true}>
            <Text style={{
                fontSize: 15, alignSelf: 'center',
                color: '#e6b800', fontWeight: 'bold',
            }}>Explore page </Text>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    Screen: {
        flex: 1,
        width: '100%', backgroundColor: 'white',
        paddingTop: 25, alignItems: 'center'

    },
    logo: {
        width: 160,
        height: 150,
        marginTop: 30,
        marginBottom: 40,
        alignSelf: 'center',
        borderRadius: 25,
    },

})
export default ExploreScreen;