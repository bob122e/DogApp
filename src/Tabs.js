import { TabNavigator } from 'react-navigation';
import App from './App';
import List from './List';

var Tabs = TabNavigator({
    Random: { screen: App },
    Breeds: {screen: List}
})

export default Tabs;