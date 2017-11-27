import {React} from 'react'
import {StackNavigator} from 'react-navigation';

import Screen1 from './Screen1'
import Screen2 from './Screen2'

export const ModalStack = StackNavigator({
  Home: {
    screen: Screen1
  },
  Second: {
    screen: Screen2
  }
});
