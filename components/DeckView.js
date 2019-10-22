import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getData } from '../utils/api';

class DeckView extends React.Component{
   
    render(){
      // get pass parameter form parent
        const deck = this.props.navigation.state.params.entryId
        const decks = getData()
        
        console.log(deck)
        return(
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

  DeckView.navigationOptions = {
    title: 'Détail du deck',
  };
  
export default DeckView