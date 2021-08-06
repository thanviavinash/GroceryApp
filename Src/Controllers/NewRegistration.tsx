import * as React from 'react';
import { View, TouchableOpacity, Image, StatusBar, ImageBackground } from 'react-native';
import { Card, Avatar, TextInput } from 'react-native-paper';

import Styles from '../Styles/SplashPhoneNumberStyle';
import Img from '../Components/SplashPhoneNumberComponent/ImageComponent';
import Txt from '../Components/SplashPhoneNumberComponent/TextComponent';

const NewRegistration = () => {
    return (
        <View style={Styles.containerView}>
            <StatusBar hidden={true} />
            <Card style={[Styles.card, { height: '40%' }]}>
           
                <ImageBackground source={require('../Assests/main.png')} style={Styles.image1}/>
                    <Txt style={Styles.textDescription}>
                    It looks like you don’t have account in this number. 
                    Please let us know some information for a scure service
                    </Txt>
                {/* </ImageBackground> */}

                {/* <Img source={require('../Assests/undraw_personalization_triu1.png')} style={[Styles.image2]} /> */}
                <TouchableOpacity style={{ alignSelf: 'center', height: '40%', width: '35%', borderRadius: 100 }}>
                    <Image source={require('../Assests/photoImage.png')} style={{ alignSelf: "center", top: -6 }}></Image>
                </TouchableOpacity>
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

export default NewRegistration;