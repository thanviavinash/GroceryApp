import * as React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { Card } from 'react-native-paper';

const One = () => {
  const [data, setData] = React.useState(DATA);
  return (
    <View style={{ flex: 1 }}>
{/* 
//if data is empty then so this card 
<Card style={{flex:1}}>
            <Image source={require('../Assests/Empty-rafiki.png')}></Image>
            <Text style={{fontSize:17, fontWeight:'900', alignSelf:'center', padding:15, color:'#37474F', textAlign:'center'}}>
                
            There is n ongoing order right now.
             You can order from home.
            </Text>
            </Card> */}




{/* IF DATA IS NOT NULL THEN RENDER THIS SCREEN  */}
      <FlatList style={{ flex: 1, backgroundColor: '#FFF' }}
        data={DATA}
        renderItem={({ item }) => {
          return (
            //Main Card View
            <Card style={{
              padding: 10,
              borderBottomColor: '#D8D8D8',
              borderBottomWidth: 1, 
              
            }}>

              {/* subview  */}
              <View style={{
                backgroundColor: 'white',
                flexDirection: 'row',
                height: 90,
                width: '100%',
                alignItems: 'center'
              }}>

                {/* ROund Image View */}
                <View style={{
                  backgroundColor: '#F37A20',
                  height: 70,
                  width: '19%',
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 35
                }}>
                  <Image source={require('../Assests/shopping_basket_24px.png')} />
                </View>

                {/* title , date and delivery status */}
                <View style={{

                  height: 70,
                  width: '55%',
                  marginLeft: 8,
                  justifyContent: 'center',
                  alignItems: 'flex-start',

                }}>
                  <Text style={{ color: '#37474F', fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                  <Text style={{ color: '#5EC401', fontSize: 12 }}>
                    {item.deliveryStatus === 'Delivered' ? <Text style={{ color: '#5EC401' }}>{item.deliveryStatus} </Text> : <Text style={{ color: 'red' }}> {item.deliveryStatus}</Text>}</Text>

                  <Text style={{ color: '#37474F', fontSize: 14, paddingBottom: 3 }}>{item.date}</Text>
                </View>

                {/* rate View  */}

                <View style={{

                  height: 70,
                  width: '20%',
                  marginLeft: 5,
                  justifyContent: 'center',
                  alignItems: 'center',

                }}>
                  <Text style={{ color: '#F37A20', fontSize: 20, fontWeight: 'bold' }}>
                    ৳{item.rate}
                  </Text>
                </View>

              </View>
            </Card>
          )
        }
        }
        keyExtractor={item => item.id}
      />


    </View>
  );
}

export default One;


const DATA = [
  {
    id: '1',
    title: 'First Item',
    deliveryStatus: 'Delivered',
    date: 'October 26,2021',
    rate: '100'
  },
  {
    id: '2',
    title: 'Second Item',
    deliveryStatus: 'Cancelled',
    date: 'October 26,2021',
    rate: '200'
  },
  {
    id: '3',
    title: 'Third Item',
    deliveryStatus: 'Delivered',
    date: 'October 26,2021',
    rate: '300'
  },
  {
    id: '4',
    title: 'Fourth Item',
    deliveryStatus: 'Delivered',
    date: 'October 26,2021',
    rate: '400'
  },
  {
    id: '5',
    title: 'Fifth Item',
    deliveryStatus: 'Cancelled',
    date: 'October 26,2021',
    rate: '500'
  },
  {
    id: '6',
    title: 'Sixth Item',
    deliveryStatus: 'Delivered',
    date: 'October 26,2021',
    rate: '600'
  },
  {
    id: '7',
    title: 'Seventh Item',
    deliveryStatus: 'Delivered',
    date: 'October 26,2021',
    rate: '700'
  },
  {
    id: '8',
    title: 'Eight Item',
    deliveryStatus: 'Cancelled',
    date: 'October 26,2021',
    rate: '800'
  },
  {
    id: '9',
    title: 'Nine Item',
    deliveryStatus: 'Delivered',
    date: 'October 26,2021',
    rate: '900'
  },
  {
    id: '10',
    title: 'Ten Item',
    deliveryStatus: 'Cancelled',
    date: 'October 26,2021',
    rate: '1000'
  },
];