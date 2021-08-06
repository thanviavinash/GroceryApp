import * as React from 'react';
import { Image, View, TouchableOpacity, StatusBar } from 'react-native';
import { Text, Card, Avatar, TextInput, Button } from 'react-native-paper';

import Styles from '../Styles/SplashPhoneNumberStyle';

const SplashPreregistered = () => {
    return (
        <View style={Styles.containerView}>
            <StatusBar hidden={true} />
            <Card style={Styles.card}>
                <Image source={require('../Assests/main.png')} style={Styles.image1} />
                <Image resizeMode={'cover'} source={require('../Assests/ForgotPassword.png')} style={Styles.image2} />
            </Card>

            <Text style={Styles.textEnterNumber}>
                Enter the password
            </Text>
            <Text style={Styles.textDescription}>
                It looks like you already have an account in this number. Please enter the password to proceed
            </Text>

            <View style={Styles.viewMiddle}>
                <Avatar.Icon size={40} icon={require('../Assests/lock_24px.png')} color={'#000'} style={Styles.avatarIcon1} />
                <TextInput secureTextEntry={true} placeholder={'password'}
                    style={Styles.textInput} underlineColor={'#F0F1F2'} />
                <Avatar.Icon size={40} icon={require('../Assests/visibility_24px.png')} style={Styles.avatarIcon1} />
            </View>

            <Button style={{ marginTop: 30, paddingLeft: 16, alignSelf: 'flex-start' }}
                color={'#F37A20'}
                onPress={() => { alert('under Development') }}>
                Forgot Password?
            </Button>

            <TouchableOpacity style={{ width: "90%", backgroundColor: "#FFF", height: 52, marginVertical: '30%', alignSelf: 'center' }}>
                <Image source={require('../Assests/submitButton.png')} style={Styles.image3}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default SplashPreregistered;