import { combineReducers } from 'redux';
import { RECEIVE_DECKS, UPDATE_SELECTED_DECK } from '../actions/DeckActions'
import { decks, selectedDeck } from './DeckReducers';

export default combineReducers({ decks, selectedDeck });
