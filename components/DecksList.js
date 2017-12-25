import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import DeckPreview from './DeckPreview';
import { defaultColor } from '../styles/colors';
import { fetchAllDecks } from '../actions/DeckActions';
import { connect } from 'react-redux';

class DecksList extends Component {

  componentDidMount = () => {
    this.props.fetchAllDecks();
  }

  render() {
    const { decksList, navigation } = this.props;
    return (
        <View style={styles.listContainer}>
          <FlatList
            data={decksList}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => <DeckPreview deck={item} navigation={ navigation }> </DeckPreview>}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: defaultColor
  },
});

const mapStateToProps = ({ decks }) =>{
  return { decksList: decks };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    fetchAllDecks: () => fetchAllDecks(dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DecksList);
