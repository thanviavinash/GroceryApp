import * as React from 'react';
import { Image, View } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import one from '../Controllers/one';
import two from '../Controllers/two';
import HomeController from '../Controllers/HomeController';
import Category from '../Controllers/Category';
import More from './More';

const Tab = createBottomTabNavigator();

const OrderCategory = () => {

  return (

    <Tab.Navigator initialRouteName="Home"

      screenOptions={{
        tabBarActiveBackgroundColor: '#5EC401',
        tabBarItemStyle: { height: 40, borderRadius: 50, alignSelf: 'center', marginRight: 15, marginLeft: 15, padding: 33 },
        tabBarStyle: {
          backgroundColor: '#FFF', height: 85,
          borderTopLeftRadius: 15, borderTopRightRadius: 15,
        },

      }}
    >
      <Tab.Screen
        name="Grocery Plus"

        component={HomeController}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <Image style={{
                width: 30, height: 30,
                tintColor: focused ? '#FFF' : '#37474F',
              }} source={require('../Assests/home_24px.png')} />
            );


          },
          // tabBarIconStyle:{width:60, backgroundColor:'pink'}

        }} />

      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <Image style={{
                width: 25, height: 25,
                tintColor: focused ? '#FFF' : '#37474F'

              }} source={require('../Assests/dashboard_24px.png')} />
            );
          }

        }}
      />

      <Tab.Screen
        name="ThirdPage"
        component={one}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <Image style={{
                width: 30, height: 30,
                tintColor: focused ? '#FFF' : '#37474F'
              }} source={require('../Assests/bag_24px.png')} />
            );
          }
        }} />

      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ focused }) => {
            return (
              <Image style={{
                width: 30, height: 30,
                tintColor: focused ? '#FFF' : '#37474F'
              }} source={require('../Assests/menu_24px.png')} />
            );
          }
        }} />
    </Tab.Navigator>
  );
}

export default OrderCategory;