export const generateNewData = () => {
  const decksList =
  [
    {
      id: getNewId(),
      title: 'Math Questions',
      questions: [
        {
          question: '3 x 4 = ?',
          answer: '12'
        },
        {
          question: '100 / ? = 25',
          answer: '4'
        }
      ]
    },

    {
      id: getNewId(),
      title: 'Geografy',
      questions: [
        {
          question: 'How many continents exists in the world?',
          answer: '7'
        },
        {
          question: 'What\'s the Ireland capital?',
          answer: 'Dublin'
        }
      ]
    },

    {
      id: getNewId(),
      title: 'Easy questions',
      questions: []
    }
  ];

  return decksList;
}

export const getNewId = () =>  Math.floor(Math.random() * Date.now()) + 0;

export const getNewDeck = (title) =>{
  return {
    id: getNewId(),
    title,
    questions: []
  }
}
