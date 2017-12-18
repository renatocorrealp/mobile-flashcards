import { INSERT_DECK, RECEIVE_DECKS, UPDATE_SELECTED_DECK, GET_SELECTED_DECK, REFRESH_DECK } from '../actions/DeckActions'

export const decks = (state = {}, action) => {
  switch (action.type) {
    case INSERT_DECK:
      return [...state, action.deck];
    case REFRESH_DECK:
      const changedDeck = action.deck;
      const newState = Array.from(state);

      return newState.map((deck) => {
        if(deck.id === changedDeck.id){
          return changedDeck
        }

        return deck
      })
    case RECEIVE_DECKS :
      return action.decks;
    default :
      return state;
  }
}

export const selectedDeck = (state={}, action) => {
  switch (action.type) {
    case UPDATE_SELECTED_DECK:{
      const { id, title, questions } = action.selectedDeck;
      return { id, title, questions };
     }
    default:
      return state
  }
}
