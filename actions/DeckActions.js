import { getAllDecks } from '../utils/apis';
export const RECEIVE_DECKS = 'RECEIVE_DECKS';

export function fetchAllDecks (dispatch) {
  return getAllDecks().then(decks => dispatch(receiveDecks(decks)));
}

export const receiveDecks = (decks) => {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}
