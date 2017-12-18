import { AsyncStorage } from 'react-native';
import { generateNewData } from './DataManager';

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks';

export const getAllDecks = () =>
   AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(decks =>  {
      if(decks && decks.length > 0){
        return JSON.parse(decks);
      }

      const decksList = generateNewData();

      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decksList));
      return decksList;
    })

export const addDeck = (deck) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
    const decksList = JSON.parse(result);
    decksList.push(deck);
    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decksList));
  })
}


export const updateDeck = (deckToUpdate) => {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(result => {
    let decksList = JSON.parse(result);

    decksList = decksList.map((deck) => {
      if(deckToUpdate.id === deck.id){
        return deckToUpdate;
      }
      return deck;
    });

    return AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decksList));
  })
}
