import React from 'react';
import DecksList from './components/DecksList';
import AddDeck from './components/AddDeck';
import DeckDetails from './components/DeckDetails';
import { DeckPreview } from './components/DeckPreview';
import { black, defaultColor } from './styles/colors';
import { View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';

const MainTab = TabNavigator({
  DecksList: {
    screen: DecksList,
    navigationOptions: {
      tabBarLabel: 'DECKS',
    },
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: 'NEW DECK',
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    style: {
      height: 56,
      backgroundColor: black,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNavigator = StackNavigator({
  Home: {
    screen: MainTab
  },
  DeckDetails: {
    screen: DeckDetails,
    navigationOptions: {
      headerTintColor: defaultColor,
      headerStyle: {
        backgroundColor: black,
      },
      title: 'Udacicards'
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: defaultColor,
      headerStyle: {
        backgroundColor: black,
      },
      title: 'Quiz'
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: defaultColor,
      headerStyle: {
        backgroundColor: black,
      },
      title: 'Add Card'
    }
  }
});

const store = createStore(reducer, applyMiddleware(thunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <View style={{height: Constants.statusBarHeight}}>
            <StatusBar barStyle="light-content" />
          </View>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
