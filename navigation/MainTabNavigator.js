import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { purple, white } from '../utils/colors'
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DeckList from '../components/DeckList';
import AddDeck from '../components/AddDeck'

const config = Platform.select({
  web: { headerMode: 'null' },
  default: { headerMode: 'null' },
});

const DeckListStack = createStackNavigator(
  {
    DeckList: DeckList,
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

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),

};

LinksStack.path = '';

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  ),
};

SettingsStack.path = '';


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
