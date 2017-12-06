import {React} from 'react'
import { TabNavigator } from 'react-navigation';

import Head from './Head'
import Stomach from './Stomach'

export const Tabs = TabNavigator({
  Head: {
    screen: Head
  },
  Stomach: {
    screen: Stomach
  }
})
