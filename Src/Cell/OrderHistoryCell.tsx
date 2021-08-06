import * as React from 'react';
import { Card, Text } from 'react-native-paper';

const OrderHistoryCell = (props) =>{
    return(
        <Card style={{backgroundColor:'#E5E5E5'}} >
            {/* <Text>{props.title}</Text>
            <Text>{props.deliveryStatus}</Text>
            <Text>{props.date}</Text> */}
            title={props.title}
           

            
        </Card>
    );
}
export default OrderHistoryCell;