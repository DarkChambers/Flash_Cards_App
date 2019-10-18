import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


class DeckView extends React.Component{
   
    render(){
        
        return(
            <View style={styles.container}><Text>hello</Text></View>
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
    title: 'Deck',
  };
  
export default DeckView