import React from 'react';
import { View } from 'react-native';

export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Second',
  }
  render() {
    return (
      <View style={{backgroundColor: "blue"}}>
        <ModalStack />
      </View>
    );
  }
}
