import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { ice, gray } from '../styles/colors';
import { StackNavigator } from 'react-navigation';

export default function DeckPreview ({ deck, navigation }){
  return(
      <TouchableHighlight onPress={() => navigation.navigate('DeckDetails', { deck: deck })}
      underlayColor={ ice }>
        <View style={styles.deckContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.deckName}>{deck.title}</Text>
            <Text style={styles.cardsTotal}>{deck.questions.length} cards</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
  deckContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: gray,
    borderBottomWidth: 1,
  },
  subContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 35
  },
  deckName: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  cardsTotal: {
    color: gray
  }

});
