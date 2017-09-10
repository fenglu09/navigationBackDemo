import { StackNavigator } from 'react-navigation';

import Page3 from './Page3';
import Page4 from './Page4';
const MessageNavigator = StackNavigator({
    message: {
        screen: Page3,
    },
    page4: {
        screen: Page4,
    }
}, {
    mode: 'card',
    navigationOptions: ({ navigation, screenProps }) => {
        let { routeName } = navigation.state;
       
        let isTabVisibale = routeName == 'message' ? true : false;
        return {
            tabBarVisible: isTabVisibale,
        }
    },
});

export default MessageNavigator;