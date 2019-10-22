import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'

class AddDeck extends React.Component {

    state = {
        text: ''
    }
    submitName=()=>{
        const{text} =this.state
        saveDeckTitle(text)
        this.props.dispatch(addDeck(text))
        this.props.navigation.navigate('DeckView',{eb})
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Quel est le nom du nouveau deck ?</Text>
                {/* get the value from input and set the state */}
                <TextInput onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}>
                </TextInput>
                <Button onPress={this.submitName}
                    title='Ajouter un deck'>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

AddDeck.navigationOptions = {
    title: 'Ajouter un Deck',
  };
export default AddDeck