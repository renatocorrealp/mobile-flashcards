import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class AddDeck extends Component {
  render() {
    return (
        <View style={styles.listContainer}>
          <Text>Add new Deck</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
