import React from 'react';
import { View, StyleSheet, TextInput, Text, Image } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import {Button} from 'nachos-ui';
import Container from './Container'


export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: '어디가 아프세요?',
  };

  render() {
    return (
      <Container>
        <View style={styles.head}>
          <Text> 어디가 아픈가요? </Text>
        </View>
        <View style={styles.body}>
          <Image style={{flex: 1}} source={require('./body.jpg')}>
            <Button style={{opacity: 0.5, width: 10, height: 10, left: 10, top: 10}}> H </Button>
          </Image>
        </View>
        <View style={styles.foot}>
          <Button> 아픈 것 제출 </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foot: {
    margin: 10,
    flex: 1,
  },
});
