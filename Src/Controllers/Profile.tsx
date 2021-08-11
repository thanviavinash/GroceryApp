import * as React from 'react';
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper';
import { View, Image, TouchableOpacity } from 'react-native';
import Styles from '../Styles/SplashPhoneNumberStyle';
import Img from '../Components/SplashPhoneNumberComponent/ImageComponent';

const Profile = () => {

    return (

        <View style={{ flex: 1, backgroundColor: '#FFF' }}>

            <Card style={{ width: '100%', height: 180, justifyContent: 'center', backgroundColor: '#FFF', shadowOpacity: 0.0 }}>
                <Image source={require('../Assests/pic.png')}
                    style={{
                        alignSelf: 'center', justifyContent: 'center',
                        height: 140, width: 140, borderRadius: 55, resizeMode: 'contain', marginVertical: 20
                    }} />
            </Card>

            <View style={Styles.viewMiddle}>
                <Avatar.Icon size={40} icon={require('../Assests/account_circle_24px.png')} color={'#000'} style={Styles.avatarIcon1} />
                <TextInput placeholder={'Full Name'}
                    style={Styles.textInput} underlineColor='#F0F1F2' theme={{ colors: { primary: "#F0F1F2" } }} />
                {/* <Avatar.Icon size={40} icon={require('../Assests/visibility_24px.png')} style={Styles.avatarIcon1} /> */}
            </View>
            <View style={Styles.viewMiddle}>
                <Avatar.Icon size={40} icon={require('../Assests/lock_24px.png')} color={'#000'} style={Styles.avatarIcon1} />
                <TextInput secureTextEntry={true} placeholder={'password'}
                    style={Styles.textInput} underlineColor={'#F0F1F2'} theme={{ colors: { primary: "#F0F1F2" } }} />
                <Avatar.Icon size={40} icon={require('../Assests/visibility_24px.png')} style={Styles.avatarIcon1} />
            </View>
            <View style={Styles.viewMiddle}>
                <Avatar.Icon size={40} icon={require('../Assests/call_24px.png')} color={'#000'} style={Styles.avatarIcon1} />
                <TextInput placeholder={'Phone Number'}
                    style={Styles.textInput} underlineColor={'#F0F1F2'} theme={{ colors: { primary: "#F0F1F2" } }} />
                {/* <Avatar.Icon size={40} icon={require('../Assests/visibility_24px.png')} style={Styles.avatarIcon1} /> */}
            </View>
            <TouchableOpacity style={Styles.touchable}>
                <Img source={require('../Assests/save.png')} style={Styles.image3} />
            </TouchableOpacity>
        </View>

    )
}


export default Profile;