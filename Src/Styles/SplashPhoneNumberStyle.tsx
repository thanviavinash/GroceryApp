import * as React from 'react';
import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    containerView: {
        flex: 1,
        backgroundColor: '#FFF'
    },

    card: {
        height: '50%',
        width: '100%',
        backgroundColor: '#FFF',
        elevation: 0
    },
    image1: {
        height: 150,
        width: '100%',
        alignSelf: 'center',
        opacity: 0.5,
    },
    image2: {
        height: '65%',
        width: '70%',
        alignSelf: 'center'
    },
    textEnterNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#37474F',
        padding: 16,
        top: 20
    },
    textDescription: {
        fontSize: 14,
        color: '#37474F',
        paddingLeft: 16,
        fontWeight: '500',
        opacity:1.0
    },
    viewMiddle: {
        top: 28,
        flexDirection: 'row',
        backgroundColor: '#F0F1F2',
        height: 52,
        width: '90%',
        alignSelf: 'center'
    },
    avatarIcon1: {
        backgroundColor: '#F0F1F2',
        marginTop: 5
    },
    textInput: {
        backgroundColor: '#F0F1F2',
        height: 52,
         width: '77%'
    },
    touchable: {
        width: "90%",
        backgroundColor: "#FFF",
        height: 52,
        marginVertical: '35%',
        alignSelf: 'center'
    },
    image3:{
        width:'100%',
         height:'100%',
          borderRadius:8
        }



});


export default Styles;