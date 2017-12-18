import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { ice, gray } from '../styles/colors';
import { StackNavigator } from 'react-navigation';
import { updateSelectedDeck } from '../actions/DeckActions';
import { connect } from 'react-redux';

class DeckPreview extends Component{
  selectDeck = (deck) => {
    const { updateSelectedDeck, navigation } = this.props;
    updateSelectedDeck(deck);
    navigation.navigate('DeckDetails');
  }

  render(){
    const { deck } = this.props;
    return(
        <TouchableHighlight onPress={() => this.selectDeck(deck)}
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

const mapStateToProps = (state) =>{
  return state;
}

const mapDispatchToProps = (dispatch) =>{
  return {
    updateSelectedDeck: (deck) => dispatch(updateSelectedDeck(deck))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (DeckPreview);
