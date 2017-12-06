import React from 'react';
import { View, TextInput, WebView } from 'react-native';
import { ModalStack } from './NavBar'
import Container from './Container';
//import MapView from 'react-native-maps';


export default class Screen3 extends React.Component {
  static navigationOptions = {
    title: '병원을 선택하세요',
  }
  render() {
    return (
      <Container>
        <WebView
          source={{uri: 'https://m.map.naver.com/search2/search.nhn?query=%EB%B3%91%EC%9B%90&siteSort=1&sm=clk'}}
        />
      </Container>
    );
  }
}
