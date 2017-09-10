import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

export default class MessagePage extends Component {

    static navigationOptions = {
        tabBarLabel: 'Message',
        title: 'Message'
    }

    constructor(props) {
        super(props);
    }
    
    render() {
       
        return (
            <View>
                <Text>Message</Text>
            </View>
        )
    }
}
