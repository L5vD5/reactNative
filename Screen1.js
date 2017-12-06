import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'nachos-ui';
import Container from './Container'
import {Actions} from 'react-native-router-flux'

export default class Screen1 extends React.Component {
  static navigationOptions = {
    title: '시작 화면',
  }

  render() {
    return (
      <Container>
        <View style={styles.head}>
          <Text> 홈 화면 </Text>
        </View>
        <View style={styles.body}>
          <Text> 로고 </Text>
        </View>
        <View style={styles.foot}>
            <Button style={{padding: 10}} onPress={() => Actions.screen2()}> 이용하기 </Button>
            <Button style={{padding: 10}}> 사용 설명서 보기 </Button>
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
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  foot: {
    flex: 1,
  },
});
