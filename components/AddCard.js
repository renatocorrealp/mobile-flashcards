import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, Alert, KeyboardAvoidingView } from 'react-native';
import { fetchDeck, updateSelectedDeck } from '../actions/DeckActions';
import { defaultColor, black } from '../styles/colors';
import { getNewCard } from '../utils/DataManager';
import { connect } from 'react-redux';

class AddCard extends Component {
  state = {
    question: null,
    answer: null
  }

  submitCard = () => {
    const { deck, fetchDeck, updateSelectedDeck, navigation } = this.props;
    const { question, answer } = this.state;
    const newCard = { question, answer };

    deck.questions.push(newCard);
    updateSelectedDeck(deck);
    fetchDeck(deck);

    this.setState({ question: null,  answer: null });
    Alert.alert('Card inserted to the deck');
  }

  render() {
    const { question, answer } = this.state;
    return (
        <KeyboardAvoidingView style={ styles.addCardContainer }>
          <TextInput onChangeText={ (question) => this.setState({ question }) }
            style={[ styles.inputs, { marginTop: 50 } ] }
            placeholder='Card Question'
            value={ question }/>
          <TextInput onChangeText={ (answer) => this.setState({ answer }) }
            style={[ styles.inputs, { marginTop: 20 } ] }
            placeholder='Card Answer'
            value={ answer }/>
          <TouchableHighlight onPress={() => this.submitCard()}
            style={ styles.submit }>
            <Text style={{ color: defaultColor, fontSize: 15 }}>Submit</Text>
          </TouchableHighlight>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  addCardContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  inputs:{
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
});

const mapStateToProps = ({ selectedDeck }, what) =>{
  return { deck: selectedDeck };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchDeck: (deck) => fetchDeck(dispatch, deck),
    updateSelectedDeck: (deck) => dispatch(updateSelectedDeck(deck))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddCard);
