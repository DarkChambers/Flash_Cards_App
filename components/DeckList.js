import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getData } from '../utils/api';
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import {receiveDecks} from '../actions'


class DeckList extends React.Component {

  componentWillMount(){
  getDecks().then(decks=>this.props.receiveAllDecks(decks))
  
  console.log("willMount")
  
}

  render() {
    const { decks } = this.props
    console.log("render()")
    console.log(decks)
    
    return (
      <View style={styles.container}>
        {
          // 
          Object.keys(decks).map((deck) => {
            const { title, questions } = decks[deck]
            return (
              <View key={deck}>
                <Text>{title}</Text>
                <Text>{questions.length}</Text>
                {/* access method from navigation and pass parameters  */}
                <Button onPress={()=>this.props.navigation.navigate('DeckView', {entryId:title})}
                title='voir le deck'></Button>
              </View>
            )
          })
        }
 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

function mapStateToProps(decks){
  console.log("mapStateToProps")
  return {decks}
}
function mapDispatchToProps(dispatch){
  console.log("mapDispatchToProps")
  return{
    receiveAllDecks: (decks)=>dispatch(receiveDecks(decks))
  }
}


DeckList.navigationOptions = {
  title: 'Liste des decks',
};

//use connect to connect the component to the store,component will receive data and callback functions as props
export default connect(mapStateToProps , mapDispatchToProps)(DeckList)