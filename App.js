import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Scene, Router, TabBar} from 'react-native-router-flux';
import Screen1 from './Screen1'
import Screen2 from './Screen2'
import Screen3 from './Screen3'
import Head from './Head'
import Stomach from './Stomach'
import TabIcon from './TabIcon'

export default class App extends React.Component {
  render() {
    return (
    <Router>
      <Scene key="root">
        <Scene key="screen1" title="Screen1" component={Screen1} hideNavBar={true} initial/>
        <Scene key="screen2" title="Screen2" component={Screen2} hideNavBar={true} />
      </Scene>
    </Router>
  );
  }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    tabBarStyle: {
            borderTopWidth : .5,
            borderColor    : '#b7b7b7',
            backgroundColor: 'white',
            opacity        : 1
    }
});
