import { TabNavigator, StackNavigator } from 'react-navigation';
import App from './App';
import List from './List';
import Detail from './Detail';

var Breeds = StackNavigator({
    List: { screen: List },
    Detail: { screen: Detail }
})

var Tabs = TabNavigator({
    Random: { screen: App },
    Breeds: { screen: Breeds }
})

export default Tabs;