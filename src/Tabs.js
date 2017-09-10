import React, { Component } from 'react';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import HomeNavigator from './home/HomeNavigator';
import MessageNavigator from './message/MessageNavigator';
const TabsNav = TabNavigator(
    {
        HomeTab: {
            screen: HomeNavigator,
            navigationOptions: {
                title: 'Home'
            }
        },
        Message: {
            screen: MessageNavigator,
        }
    },
    {
        initialRouteName: 'HomeTab',
        tabBarOptions: {
            activeTintColor: '#008CED',
        },
        showIcon: false,
        lazy: true,
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false
    });
export default class TabsPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <TabsNav />
    }
}
