import { createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Searchscreen from './src/screens/searchscreen';
import Resultshowscreen from './src/screens/resultshowscreen';
const navigator=createStackNavigator({
  Search:Searchscreen,
  Resultshow:Resultshowscreen
},
{
  initialRouteName:'Search',
  defaultNavigationOptions:{
    title:'Business Search'
  }
})
export default createAppContainer(navigator);