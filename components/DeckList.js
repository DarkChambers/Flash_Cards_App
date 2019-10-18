import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getData } from '../utils/api';

class DeckList extends React.Component {
  render() {
    const decks = getData()
    return (
      <View style={styles.container}>
        {
          Object.keys(decks).map((deck) => {
            const { title, questions } = decks[deck]
            return (
              <View key={deck}>
                <Text>{title}</Text>
                <Text>{questions.length}</Text>
                <Button onPress={()=>this.props.navigation.navigate('DeckView', {entryId:deck})}
                title='voir le deck'></Button>
              </View>
            )
          })
        }
        {/* <Button onPress={()=>this.props.navigation.navigate('AddDeck')}
                title='voir le deck'></Button> */}
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

DeckList.navigationOptions = {
  title: 'Liste des decks',
};
export default DeckList