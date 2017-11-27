import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Bubble} from 'nachos-ui';

export default class Screen2 extends React.Component {
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head}>
        </View>
        <View style={styles.body}>
          <Text> 로고 </Text>
        </View>
        <View style={styles.foot}>
            <Button style={{padding: 10}}> 이용하기 </Button>
            <Button style={{padding: 10}}> 사용 설명서 보기 </Button>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
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
