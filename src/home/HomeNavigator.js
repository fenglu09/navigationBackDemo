import {
    StackNavigator
} from 'react-navigation';
import HomePage from './Page1';
import Page2 from './Page2';
const HomenNavigator = StackNavigator({
    home: {
        screen: HomePage,
    },
    page2: {
        screen: Page2
    }
}, {
    navigationOptions: ({ navigation, screenProps }) => {
        let { routeName } = navigation.state;
       
        let isTabVisibale = routeName == 'home' ? true : false;
        return {
            tabBarVisible: isTabVisibale,
        }
    },
});

export default HomenNavigator;