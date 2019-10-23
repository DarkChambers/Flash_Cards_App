import React from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { addDeck } from '../actions'
import { connect }  from 'react-redux'

class AddDeck extends React.Component {

    state = {
        text: ''
    }
    submitName = () => {
        const { text } = this.state
        saveDeckTitle(text)
        this.props.dispatch(addDeck(text))
        this.props.navigation.navigate('DeckView', { entryId : text })
        this.setState({text:''})
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Quel est le nom du nouveau deck ?</Text>
                {/* get the value from input and set the state */}
                <TextInput style={styles.input} onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}>
                </TextInput>
                <Button style={styles.button} onPress={this.submitName}
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
    },
    input: {
        height: 44,
        width: 200,
        padding :8,
        margin :50,
        borderColor: '#757575',
        borderWidth: 1,
        borderRadius : 8
    }
    , title :{
        fontSize :20,
        color :'#333'
    },

})

AddDeck.navigationOptions = {
    title: 'Ajouter un Deck',
};

//use connect to connect the component to the store,component will receive data and callback functions as props
export default connect ()(AddDeck)