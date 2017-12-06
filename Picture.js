import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {Button} from 'nachos-ui';
import Container from './Container'

export default class Picture extends React.Component {
  static navigationOptions = {
    title: '그림',
  }
  render() {
    return (
      <Container>
        <Button style={{padding: 10}} onPress={() => this.props.navigation.navigate('Head')}> 뚝배기 </Button>
        <Button style={{padding: 10}} onPress={() => this.props.navigation.navigate('Stomach')}> 배때지 </Button>
      </Container>
    );
  }
}
