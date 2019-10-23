import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { getData } from '../utils/api';
import { connect } from 'react-redux'
import ActionButton from './ActionButton'
import { purple, white, orange} from '../utils/colors'

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
        <ActionButton styles={styles} color={purple} text={'ajouter une carte'} onPress={()=>this.props.navigation.navigate('AddCard', {entryId:deck})}/>
        <ActionButton styles={styles} color={orange} text={'Démarrer le Quiz'} onPress={()=>this.props.navigation.navigate('Quiz', {entryId:deck})}/>
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
  androidBtn :{
  padding :10,
  borderRadius :8,
  height : 90, 
  margin : 5,
  width : 200
},
submitBtnText:{
  color : "#fff",
  fontSize : 30,
  textAlign : 'center'
}
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