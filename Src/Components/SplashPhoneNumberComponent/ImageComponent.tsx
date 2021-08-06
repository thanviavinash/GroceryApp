import * as React from 'react';
import {Image} from 'react-native';

const Img = (props) =>{
    return(
        <Image source={props.source}
         style={props.style}
        />
    );
}

export default Img;