import * as React from 'react';
import {Text} from 'react-native-paper';

const Img = (props) =>{
    return(
        <Text
         style={props.style}
        >
       {props.children}
        </Text>
    );
}

export default Img;