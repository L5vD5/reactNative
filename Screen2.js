import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { ModalStack } from './NavBar'
import { FormLabel, FormInput } from 'react-native-elements'
import { Stack } from './NavBar_ex'
import {Button} from 'nachos-ui';
import Container from './Container'


export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: '어디가 아프세요?',
  };

  render() {
    return (
      <Container>
        <Stack />
        <Button style={{padding: 10}} onPress={() => this.props.navigation.navigate('Second')}> 아픈 것 제출 </Button>
      </Container>
    );
  }
}
