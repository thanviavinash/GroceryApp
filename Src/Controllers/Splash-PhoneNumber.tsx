import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Card, Avatar, TextInput } from 'react-native-paper';

import Styles from '../Styles/SplashPhoneNumberStyle';
import Img from '../Components/SplashPhoneNumberComponent/ImageComponent';
import Txt from '../Components/SplashPhoneNumberComponent/TextComponent';

const SplashPhoneNumber = () => {
    return (
        <View style={Styles.containerView}>

            <Card style={Styles.card}>
                <Img source={require('../Assests/main.png')} style={Styles.image1} />
                <Img source={require('../Assests/undraw_personalization_triu1.png')} style={Styles.image2} />
            </Card>

            <Txt style={Styles.textEnterNumber}>
                Enter your mobile number
            </Txt>
            <Txt style={Styles.textDescription}>
                We need to verify you. We will send you a one time verification code.
            </Txt>

            <View style={Styles.viewMiddle}>
                <Avatar.Icon size={40} icon={require('../Assests/call_24px.png')} color={'#000'} style={Styles.avatarIcon1} />
                <Avatar.Icon size={40} icon={require('../Assests/main.png')} style={Styles.avatarIcon1} />
                <TextInput placeholder={'Phone Number'} keyboardType={'number-pad'} style={Styles.textInput}></TextInput>
            </View>


            <TouchableOpacity style={Styles.touchable}>
                <Img source={require('../Assests/next.png')} style={Styles.image3} />
            </TouchableOpacity>
        </View>
    );
}

export default SplashPhoneNumber;