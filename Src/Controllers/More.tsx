import * as  React from 'react';
import { FlatList } from 'react-native';
import { View, Image } from 'react-native';
import { Card, Text } from 'react-native-paper';


const More = () => {
    return (
        <View style={{ flex: 1 }}>
            <Card style={{
                height: 80,
                width: '100%',
                // backgroundColor: '#87DD39'

            }}>

                {/* subview  */}
                <View style={{
                    // backgroundColor: '#F0F1F2',
                    flexDirection: 'row',
                    flex: 1,
                    alignItems: 'center'
                }}>

                    {/* ROund Image View */}
                    <View style={{
                        backgroundColor: '#87DD39',
                        height: 60,
                        width: '15%',
                        marginLeft: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 35
                    }}>
                        <Image source={require('../Assests/Oval.png')} />
                    </View>
                    {/* title , date and delivery status */}
                    <View style={{
                        height: 70,
                        width: '55%',
                        marginLeft: 8,
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                    }}>
                        <Text style={{ color: '#37474F', fontSize: 16, fontWeight: 'bold' }}>Your Name</Text>
                        <Text style={{ color: '#37474F', fontSize: 14, fontWeight: '900', paddingBottom: 3 }}> 32XXXXXXXXX</Text>
                    </View>
                </View>
            </Card>

            <FlatList style={{backgroundColor:'#FFF',}}
        
        data={DATA}

        renderItem={({item}) =><View style={{ width:'95%', height:60 ,margin:1,
         alignSelf:'center', borderRadius:8, flexDirection:'row', backgroundColor:'#FFF', borderBottomWidth:1, borderColor:'#EEE9E9'  }}>
            <Image style={{height:24, width:24, justifyContent:'center', margin:10, resizeMode:'contain'}} source={item.image} ></Image>
           <Text style={{textAlign:'center', fontSize:14,fontWeight:'bold',color:'#37474F', margin:12}}> {item.title} </Text>
           
           </View>}
       />

        </View>
    )
}

export default More;





const DATA = [ {
    id: '1',
    title: 'Edit Profile',
    image: require('../Assests/edit_24px.png')
  },{
    id: '2',
    title: 'My Address',
    image:require('../Assests/place_24px.png')
  },{
    id: '3',
    title: 'My Order',
    image:require('../Assests/shopping_basket_24px.png')
  },{
    id: '4',
    title: 'My Wishlist',
    image:require('../Assests/bolt_24px.png')
  },{
    id: '5',
    title: 'chat with  us',
    image:require('../Assests/chat_bubble.png')
  },{
    id: '6',
    title: 'call to us',
    image:require('../Assests/call_24px.png')
  },{
    id: '7',
    title: 'Mail to us',
    image:require('../Assests/Subtract.png')
  },{
    id: '8',
    title: 'Facebook',
    image:require('../Assests/facebook_24px.png')
  },{
    id: '9',
    title: 'Logout',
    image:require('../Assests/logout.png')
  }]