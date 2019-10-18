import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, white } from '../utils/colors'
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck';
import DeckView from '../components/DeckView';

const config = Platform.select({
  web: { headerMode: 'null' },
  default: { headerMode: 'null' },
});

// have to add route for link inside the views
const DeckListStack = createStackNavigator(
  {
    DeckList: DeckList,
    DeckView: DeckView
    
  },
  config
);

DeckListStack.navigationOptions = {
  tabBarLabel: 'Liste des Decks',
  tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
}

DeckListStack.path = '';


const AddDeckStack = createStackNavigator(
  {
    AddDeck: AddDeck,
  },
  config
);

AddDeckStack.navigationOptions = {
  tabBarLabel: 'Ajouter une deck',
  tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
}

AddDeckStack.path = '';


const tabNavigator = createBottomTabNavigator({
  DeckListStack,
  AddDeckStack,
}, {
  tabBarOptions: {
    activeTintColor: 'purple',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: white,
    },
  }
});

tabNavigator.path = '';

export default tabNavigator;
