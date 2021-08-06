import * as React from 'react';
import { View } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import one from '../Controllers/one';
import two from '../Controllers/two';

const Tab = createMaterialTopTabNavigator();


const OrderCategory = () =>{
    return(
        <Tab.Navigator  initialRouteName="Feed"
        
        screenOptions={{
          swipeEnabled:true,
          tabBarActiveTintColor: '#5EC401',
          tabBarInactiveTintColor:'#37474F',
          tabBarLabelStyle: { fontSize: 12 },
         
          tabBarStyle: {  },
          tabBarIndicatorStyle: {backgroundColor: '#5EC401', width:'30%', marginLeft:40},
          
          
        }}

        
        
        >

<Tab.Screen
        name="FirstPage"
        component={one}
        options={{
          tabBarLabel: 'Order',
          
        }}  />
      <Tab.Screen
        name="SecondPage"
        component={two}
        options={{
          tabBarLabel: 'History',
        }} />
        </Tab.Navigator>



        );
}

export default OrderCategory;