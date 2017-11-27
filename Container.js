import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class Container extends React.Component {
  render() {
  	return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    margin: 30,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
