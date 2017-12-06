import React from 'react'
import { View, StyleSheet } from 'react-native';

export default class Container extends React.Component{
    render() {
      return(
      <View style={styles.container}>
        {this.props.children}
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
});
