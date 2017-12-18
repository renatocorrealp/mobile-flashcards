import { getAllDecks, addDeck, updateDeck } from '../utils/apis';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const UPDATE_SELECTED_DECK = 'UPDATE_SELECTED_DECK';
export const GET_SELECTED_DECK = 'GET_SELECTED_DECK';
export const INSERT_DECK = 'INSERT_DECK';
export const REFRESH_DECK = 'REFRESH_DECK';

export const fetchAllDecks = (dispatch) => {
  return getAllDecks().then(decks => dispatch(receiveDecks(decks)));
}

export const fetchDeck = (dispatch, deck) => {
  updateDeck(deck).then(() => dispatch(refreshDeck(deck)));
}

export const saveDeck = (dispatch, deck) => {
  addDeck(deck).then(() => dispatch(insertDeck(deck)));
}

export const insertDeck = deck => {
  return {
    type: INSERT_DECK,
    deck
  }
}

export const receiveDecks = decks => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export const refreshDeck = deck => {
  return {
    type: REFRESH_DECK,
    deck
  }
}

export const updateSelectedDeck = selectedDeck => {
  return {
    type: UPDATE_SELECTED_DECK,
    selectedDeck
  }
}
