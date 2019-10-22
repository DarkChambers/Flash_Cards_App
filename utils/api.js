import { AsyncStorage } from 'react-native'
//key to use AsyncStorage
const FLASHCARDS_STORAGE_KEY = 'flashcards: decks'
const initialData = {
    Geography: {
        title: 'Geography',
        questions: [
            {
                question: 'L\'affrique du sud est elle un pays?',
                answer: 'non, c\'est juste une région',
                correctAnswer: 'false'
            },
            {
                question: 'Quel état se trouve après la californie ?',
                answer: 'New York',
                correctAnswer: 'false'
            }
        ]
    },
    Javascript: {
        title: 'Javascript',
        questions: [
            {
                question: 'que veut dire undefined?',
                answer: 'variable qui a été déclarée mais qui n’a pas encore reçu de valeur',
                correctAnswer: 'true'
            },
            {
                question: 'qu est ce qu une variable ?',
                answer: 'quelque chose qui contient une information',
                correctAnswer: 'true'
            }
        ]
    }
}

export const getData = () => initialData

export async function getDecks(deck) {
    
    const results = await AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    
    if (results === null) {
        AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initialData));
        console.log("initialData")
            return initialData;
           
    }
    else {
        console.log("return parsing data");
        return JSON.parse(results);
        
    }
}

export function saveDeckTitle(title) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }))
}