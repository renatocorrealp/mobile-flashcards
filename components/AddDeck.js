import React, { Component } from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, TextInput, TouchableHighlight } from 'react-native';
import { saveDeck, updateSelectedDeck } from '../actions/DeckActions';
import { defaultColor, black, red } from '../styles/colors';
import { getNewDeck } from '../utils/DataManager';
import { connect } from 'react-redux';

class AddDeck extends Component {
  state = {
    deckTitle: null,
    emptyTitle: false
  }

  submitDeck = () => {
    const { saveDeck, navigation, updateSelectedDeck } = this.props;
    const { deckTitle, emptyTitle } = this.state;
    const newDeck = getNewDeck(deckTitle);

    if(!deckTitle){
      this.setState({
        emptyTitle: true
      });
      return;
    }

    saveDeck(newDeck);
    updateSelectedDeck(newDeck);
    this.setState({
      deckTitle: null,
      emptyTitle: false
    });
    navigation.navigate('DeckDetails');
  }

  render() {
    const { deckTitle, emptyTitle } = this.state;
    return (
        <KeyboardAvoidingView style={ styles.addDeckContainer }>
          <Text style={ styles.description }>What is the title of your new Deck?</Text>
            <TextInput onChangeText={ (deckTitle) => this.setState({ deckTitle }) }
            style={[ styles.deckTitle, emptyTitle ? styles.emptyField : {} ]}
            placeholder='Deck title'
            value={ deckTitle }/>
          <TouchableHighlight onPress={() => this.submitDeck()}
            style={ styles.submit }>
            <Text style={{ color: defaultColor, fontSize: 15 }}>Submit</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  addDeckContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  description:{
    fontSize: 20,
    marginTop: 80
  },
  deckTitle:{
    marginTop: 80,
    width: 250,
    borderWidth: 1,
    borderColor: black,
    height: 60,
    padding: 15
  },
  submit:{
    height: 60,
    width: 220,
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 90,
    backgroundColor: black,
  },
  emptyField: {
    borderColor: red
  }

});

const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps = (dispatch) =>{
  return {
    saveDeck: (deck) => saveDeck(dispatch, deck),
    updateSelectedDeck: (deck) => dispatch(updateSelectedDeck(deck))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddDeck);
