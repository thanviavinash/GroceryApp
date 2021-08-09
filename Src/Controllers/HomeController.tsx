import * as React from 'react';
import { FlatList } from 'react-native';
import { View, Image } from 'react-native';
import { Card, Text, TextInput } from 'react-native-paper';


const HomeController = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#FEFEFE' }}>
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
                        <Image source={require('../Assests/place_24px.png')} />
                    </View>

                    {/* title , date and delivery status */}
                    <View style={{

                        height: 70,
                        width: '55%',
                        marginLeft: 8,
                        justifyContent: 'center',
                        alignItems: 'flex-start',

                    }}>
                        <Text style={{ color: '#37474F', fontSize: 16, fontWeight: '900' }}>Your Location</Text>
                        {/* <Text style={{ color: '#5EC401', fontSize: 12 }}> */}
                        <Text style={{ color: '#37474F', fontSize: 14, fontWeight: 'bold', paddingBottom: 3 }}> 32 Llanberis Close, Tonteg, CF38 1HR</Text>
                    </View>

                    <View style={{
                        height: 70,
                        width: '20%',
                        justifyContent: 'center',
                        alignItems: 'flex-end',

                    }}>
                        <Image source={require('../Assests/arrow_forword_ios_24px.png')} />
                    </View>
                </View>


            </Card>

            <View style={{
                height: 52, width: '90%',
                alignSelf: 'center', marginTop: 20,
                backgroundColor: '#F0F1F2', flexDirection: 'row'
            }}>
                <Image source={require('../Assests/search_24px.png')}
                    style={{ alignSelf: 'center', padding: 13, marginLeft: 10 }} />
                <TextInput placeholder={'Search Anything'}
                    style={{
                        marginLeft: 10, width: '87%', height: 48,
                        backgroundColor: '#F0F1F2'
                    }}
                    underlineColor={'#F0F1F2'}
                />
            </View>

            <View style={{backgroundColor:'#FEFEFE', flex:1, margin:10}}>
 
      <FlatList
      
         data={DATA}
 
         renderItem={({item}) =><Card style={{ width:'45%', height:160 ,margin:9, alignItems:'center',  }}>
             <Image source={item.image}></Image>
            <Text style={{textAlign:'center', color:'#37474F'}}> {item.title} </Text>
            
            </Card>}
 
         numColumns={2}
 
        />
   
   
</View>            

                    
        </View>
    );
}

export default HomeController;


const DATA = [ {
    id: '1',
    title: 'Fruits & Vegitables',
    image: require('../Assests/orng.png')
  },{
    id: '2',
    title: 'Breakfast',
    image:require('../Assests/breakfast.png')
  },{
    id: '3',
    title: 'Beverages',
    image:require('../Assests/Beverages.png')
  },{
    id: '4',
    title: 'Meat & Fish',
    image:require('../Assests/MeatFish.png')
  },{
    id: '5',
    title: 'Snacks',
    image:require('../Assests/snks.png')
  },{
    id: '6',
    title: 'Dairy',
    image:require('../Assests/Dairy.png')
  }]