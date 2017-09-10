import React, { Component } from 'react';
import {
    View,
    Button,
    Text
} from 'react-native';

export default class Page2 extends Component {
    static navigationOptions = {
        title: 'Home Page2'
    }

    constructor(props) {
        super(props);
    }
    
    goPage4() {
        this.props.navigation.navigate('page4');
    }
    render() {
       
        return (
            <View>
                <Text>Home Page2</Text>
                <Button title='Go Message Page 2' onPress={() => this.goPage4()}/>
            </View>
        )
    }
}
