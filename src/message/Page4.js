import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

export default class Page4 extends Component {

    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        tabBarLabel: 'Message',
        title: 'Message Page2'
    }
    
    goBack() {
        this.props.navigation.goBack();
    }
    render() {
       
        return (
            <View>
                <Text>Page4</Text>
                <Button title='Go Back' onPress={()=> this.goBack()}/>
            </View>
        )
    }
}
