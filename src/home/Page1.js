import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

export default class HomePage extends Component {

    static navigationOptions = {
        tabBarLabel: 'Home',
        title: 'Home'
    }

    constructor(props) {
        super(props);
    }
    
    goPage2() {
        this.props.navigation.navigate('page2');
    }
    render() {
       
        return (
            <View>
                <Text>HomePage</Text>
                <Button title='Go Home Page 2' onPress={() => this.goPage2()}/>
            </View>
        )
    }
}