import {React} from 'react'
import {StackNavigator} from 'react-navigation';

import Picture from './Picture'
import Head from './Head'
import Stomach from './Stomach'

export const Stack = StackNavigator({
  Picture: {
    screen: Picture
  },
  Head: {
    screen: Head
  },
  Stomach: {
    screen: Stomach
  }
},
{
  headerMode: 'none',
  navigationOptions: {
     gesturesEnabled: false,
   },
});
