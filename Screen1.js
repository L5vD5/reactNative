import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from 'nachos-ui';
import Container from './Container'

export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: '시작 화면',
  }

  render() {
    return (
      <Container>
        <View style={styles.head}>
        </View>
        <View style={styles.body}>
          <Text> 로고 </Text>
        </View>
        <View style={styles.foot}>
            <Button style={{padding: 10}} onPress={() => this.props.navigation.navigate('First')}> 이용하기 </Button>
            <Button style={{padding: 10}}> 사용 설명서 보기 </Button>
        </View>
      </Container>
    );
  }
}


const styles = StyleSheet.create({
  head: {
    flex: 1,
    //alignItems: 'center',
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
