import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DeckView extends React.Componenent {
    render(){
        return(
            <View style={styles.container}>
                <Text>bienvenu dans la vue du deck</Text>
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

export default DeckView