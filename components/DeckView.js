import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getData } from '../utils/api';
import { connect } from 'react-redux'

class DeckView extends React.Component {

  render() {
    // get pass parameter form parent
    const deck = this.props.navigation.state.params.entryId
    //get the decks pool data from the store
    const { decks } = this.props

    console.log(deck)
    return (
      <View style={styles.container}>
        <Text>{decks[deck].title}</Text>
        <Text>{decks[deck].questions.length}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
function mapStateToProps(decks){
  return {
     decks
     }
}

DeckView.navigationOptions = {
  title: 'Détail du deck',
};
//use connect to connect the component to the store,component will receive data and callback functions as props 
export default connect(mapStateToProps)(DeckView)