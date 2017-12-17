import { AsyncStorage } from 'react-native';

const DECKS_STORAGE_KEY = 'mobile-flashcards:decks';

export const getAllDecks = () =>
   AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then((decks) =>  {
      if(decks && decks.length > 0){
        return JSON.parse(decks);
      }

      const decksList = generateNewData();

      AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decksList));
      return decksList;
    })

const generateNewData = () => {
  const decksList =
  [
    {
      id: 1,
      title: 'Math Questions',
      questions: [
        {
          question: '3 x 4 = ?',
          asnwer: '12'
        },
        {
          question: '100 / ? = 25',
          asnwer: '25'
        }
      ]
    },

    {
      id: 2,
      title: 'Geografy',
      questions: [
        {
          question: 'How many continents exists in the world?',
          asnwer: '7'
        },
        {
          question: 'What\'s the Ireland capital?',
          asnwer: 'Dublin'
        }
      ]
    },

    {
      id: 3,
      title: 'Easy questions',
      questions: []
    }
  ];

  return decksList;
}
