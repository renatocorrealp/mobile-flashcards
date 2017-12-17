import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { gray, defaultColor, black} from '../styles/colors';

export default class DeckDetails extends Component {
  render() {
    const { navigation } = this.props;
    const { deck } = navigation.state.params;

    return (
      <View style={styles.deckContainer}>
        <Text style={styles.deckName}>{deck.title}</Text>
        <Text style={styles.cardsTotal}>{deck.questions.length} cards</Text>
        <TouchableHighlight style={[styles.addButton, styles.buttons]} underlayColor={ gray }
          onPress={()=> console.log('nada')}>
          <Text style={styles.buttonText}>Add Card</Text>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.quizButton, styles.buttons]} underlayColor={ gray }
          onPress={()=> navigation.navigate('Quiz', { deck: deck })}>
          <Text style={[styles.buttonText, {color: defaultColor}]}>Start Quiz</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deckContainer:{
    flex: 1,
    alignItems: 'center',
    marginTop: 80
  },
  deckName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  cardsTotal: {
    color: gray
  },
  buttons:{
    height: 60,
    width: 220,
    borderColor: black,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    marginTop: 150,
    backgroundColor: defaultColor,
  },
  quizButton: {
    marginTop: 20,
    backgroundColor: black
  },
  buttonText:{
    fontSize: 20,
  }

});