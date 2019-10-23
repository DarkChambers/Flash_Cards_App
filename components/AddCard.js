import React from 'react'
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from 'react-native'

class AddCard extends React.Component {

    render(){
        return(
            <View style={styles.container}>
                <Text>Todo : formumaire ajout carte</Text>
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

export default AddCard