import * as React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Text, Card, Button } from 'react-native-paper';

const Product = (navigation) => {
    return (

        <View style={{flex:1}}>
 
        <FlatList style={{backgroundColor:'#EEE9E9'}}
                   data={DATA}
           renderItem={({item}) =><Card style={{ width:'45%', height:300 ,margin:9, alignItems:'center', borderRadius:8  }}>
             
             {/* onPress={() => navigation.navigate('Product')} */}
               <Image source={item.image} style={{alignSelf:"center"}} ></Image>
              <Text style={{textAlign:'left', color:'#37474F', fontSize:14, fontWeight:'900', marginVertical:10, paddingLeft:8, paddingRight:8}}> Radhuni Shemai - 200 gm - 4-2-15-VD-SQ </Text>
              <Text style={{textAlign:'left', color:'#F37A20', fontWeight:'bold',marginVertical:20, fontSize:16}}> {item.rate} </Text>

              <Card style={{backgroundColor:'#5EC401', height:30, width:150, alignSelf:'center'}}> 
              <TouchableOpacity style={{ flexDirection:'row'}}>
                <Image style={{tintColor:'#FFF', marginHorizontal:20, marginTop:4}} source={require('../Assests/bag_24px.png')}></Image>
              <Text style={{color:'#FFF',  marginTop:4, fontWeight:'bold'}}>Add Bag </Text>
             </TouchableOpacity>
                  
                  </Card>  
              
              </Card>}
           numColumns={2}
          />
    
  </View>            
  
    );
}

export default Product;

const DATA = [ {
    id: '1',
    title: 'Radhuni Shemai - 200 gm - 4-2-15-VD-SQ',
    image: require('../Assests/Rectangle1.png'),
    rate:'৳60'
  },{
    id: '2',
    title: 'Cheese Puffs Chips - 22 gm',
    image:require('../Assests/Rectangle2.png'),
    rate:'৳700'
  },{
    id: '3',
    title: 'Nescafe Classic Coffee Jar - 50gm',
    image:require('../Assests/Rectangle3.png'),
    rate:'৳25'
  },{
    id: '4',
    title: 'Akher Chini (Deshi Sugar) – 1kg',
    image:require('../Assests/Rectangle4.png'),
    rate:'৳30'
  }]