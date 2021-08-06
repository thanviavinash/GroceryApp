import * as React from 'react';
import { Image, View, TouchableOpacity, StatusBar } from 'react-native';
import { Text, Card,TextInput, Button } from 'react-native-paper';

import Styles from '../Styles/SplashPhoneNumberStyle';

const SplashPhoneOtp = () => {
    return (
        <View style={Styles.containerView}>
            <StatusBar hidden={true} />
            <Card style={Styles.card}>
                <Image source={require('../Assests/main.png')} style={Styles.image1} />
                <Image resizeMode={'cover'} source={require('../Assests/undraw_personalization_triu1.png')} style={Styles.image2} />
            </Card>

            <Text style={Styles.textEnterNumber}>
                Enter Verification Code
            </Text>

            <View style={[Styles.viewMiddle, { flexDirection: 'column', top: 5, backgroundColor: '#fff' }]}>

                <Text style={[Styles.textEnterNumber, { fontSize: 12, top: 0, padding: 5 }]}>
                    We have sent SMS to:
                </Text>

                <TextInput style={[Styles.textInput, {
                    width: '50%', height: 40,
                    top: 18,
                    position: 'absolute',
                    backgroundColor: "#FFF",

                }]}
                    maxLength={10}
                    placeholder="Enter Number"
                    keyboardType={'number-pad'}
                    underlineColor={'#FFF'}
                />
            </View>

            <View style={[Styles.viewMiddle, { height: 60, backgroundColor: "#fff" }]}>

                <TextInput style={{ width: '15%', marginRight: 4, marginLeft: 8, paddingLeft: 8 }} maxLength={1} />
                <TextInput style={{ width: '15%', marginRight: 4, paddingLeft: 8 }} maxLength={1} />
                <TextInput style={{ width: '15%', marginRight: 4, paddingLeft: 8 }} maxLength={1} />
                <TextInput style={{ width: '15%', marginRight: 4, paddingLeft: 8 }} maxLength={1} />
                <TextInput style={{ width: '15%', marginRight: 4, paddingLeft: 8 }} maxLength={1} />
                <TextInput style={{ width: '15%', marginRight: 4, paddingLeft: 8 }} maxLength={1} />
            </View>

            <View style={{ backgroundColor: '#fff', height: 50, width: '88%', alignSelf: 'center', top: 40, flexDirection: 'row' }}>
                <Button style={{ alignSelf: 'flex-start', height: 50 }}
                    color={'#F37A20'}
                    onPress={() => { alert('under Development') }}>
                    Resend OTP
                </Button>
                <Button style={{ alignSelf: 'flex-end', height: 50, paddingLeft: 10, }}
                    color={'#000'}
                    onPress={() => { alert('under Development') }}>
                    Change Phone number
                </Button>
            </View>

            <TouchableOpacity style={{ width: "90%", backgroundColor: "#FFF", height: 52, marginVertical: '20%', alignSelf: 'center' }}>
                <Image source={require('../Assests/next.png')} style={Styles.image3}></Image>
            </TouchableOpacity>
        </View>
    );
}

export default SplashPhoneOtp;