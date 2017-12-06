import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button} from 'nachos-ui';
import Container from './Container'

export default class Stomach extends React.Component {
  static navigationOptions = {
    title: '배',
  }
  render() {
    return (
      <Container>
        <Text> 배 아픈 내용 </Text>
        <Button style={{padding: 10}} onPress={() => this.props.navigation.navigate('Picture')}> 그림으로 </Button>
      </Container>
    );
  }
}
