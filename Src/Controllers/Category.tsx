import * as React from 'react';
import { Card, Text } from 'react-native-paper';
import { FlatList, View, Image, TouchableOpacity } from 'react-native';

const Category = (navigation) => {
  return (

    <View style={{ flex: 1, }}>

      <FlatList style={{ backgroundColor: '#EEE9E9', }}

        data={DATA}

        renderItem={({ item }) => <Card style={{ width: '45%', height: 160, margin: 9, alignItems: 'center', borderRadius: 8 }}>
          <TouchableOpacity onPress={() => navigation.navigate('Product')}>

            <Image source={item.image}></Image>
            <Text style={{ textAlign: 'center', color: '#37474F' }}> {item.title} </Text>

          </TouchableOpacity>
        </Card>}

        //  onPress={() => navigation.push('SecondPage', {
        //   description: data.description,
        //   id: data.id,
        //   time: data.time,
        //   subject: data.subject,
        // })} 

        numColumns={2}

      />


    </View>

  )
}

export default Category;


const DATA = [{
  id: '1',
  title: 'Fruits & Vegitables',
  image: require('../Assests/orng.png')
}, {
  id: '2',
  title: 'Breakfast',
  image: require('../Assests/breakfast.png')
}, {
  id: '3',
  title: 'Beverages',
  image: require('../Assests/Beverages.png')
}, {
  id: '4',
  title: 'Meat & Fish',
  image: require('../Assests/MeatFish.png')
}, {
  id: '5',
  title: 'Snacks',
  image: require('../Assests/snks.png')
}, {
  id: '6',
  title: 'Dairy',
  image: require('../Assests/Dairy.png')
}]