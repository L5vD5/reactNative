import {React} from 'react'
import {StackNavigator} from 'react-navigation';

import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'

export const ModalStack = StackNavigator({
  Home: {
    screen: Screen1
  },
  First: {
    screen: Screen2
  },
  Second: {
    screen: Screen3
  }
},
{
  mode: 'modal',
  navigationOptions: {
     gesturesEnabled: false,
   },
});
