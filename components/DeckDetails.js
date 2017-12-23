import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { gray, defaultColor, black} from '../styles/colors';
import { connect } from 'react-redux';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

class DeckDetails extends Component {
  render() {
    const { navigation, deck } = this.props;

    return (
      <View style={styles.deckContainer}>
        <Text style={styles.deckName}>{deck.title}</Text>
        <Text style={styles.cardsTotal}>{deck.questions.length} cards</Text>
        <TouchableHighlight style={[styles.addButton, styles.buttons]} underlayColor={ gray }
          onPress={()=> navigation.navigate('AddCard')}>
          <View style={styles.buttonsContainer}>
            <MaterialCommunityIcons name='cards-outline' size={30} color={ black }
            style={{marginRight: 20}}/>
            <Text style={styles.buttonText}>Add Card</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight style={[styles.quizButton, styles.buttons]} underlayColor={ gray }
          onPress={()=> navigation.navigate('Quiz')}>
          <View style={styles.buttonsContainer}>
          <MaterialIcons name='question-answer' size={30} color={ defaultColor }
            style={{marginRight: 20}}/>
            <Text style={[styles.buttonText, {color: defaultColor}]}>Start Quiz</Text>
          </View>
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
  buttonsContainer:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
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

const mapStateToProps = ({ selectedDeck }) =>{
  return { deck: selectedDeck };
}

export default connect(mapStateToProps) (DeckDetails);
