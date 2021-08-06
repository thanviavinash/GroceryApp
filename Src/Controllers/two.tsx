import * as React from 'react';
import { View, Image} from 'react-native';
import {Card, Text} from 'react-native-paper';

const Two = () =>{
    return(
        <View style={{flex:1}}>
            <Card style={{flex:1}}>
            <Image source={require('../Assests/Empty-rafiki.png')}></Image>
            <Text style={{fontSize:17, fontWeight:'900', alignSelf:'center', padding:15, color:'#37474F', textAlign:'center'}}>
           Test Avinash     
            {/* There is n ongoing order right now.
             You can order from home. */}
            </Text>
            </Card>
        </View>
    );
}

export default Two;