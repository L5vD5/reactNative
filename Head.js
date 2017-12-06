import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {Button} from 'nachos-ui';
import Container from './Container'

export default class Head extends React.Component {
  static navigationOptions = {
    title: '머리',
  }
  render() {
    return (
      <Container>
        <Text> 머리 아픈 내용 </Text>
        <Button style={{padding: 10}} onPress={() => this.props.navigation.navigate('Picture')}> 그림으로 </Button>
      </Container>
    );
  }
}
