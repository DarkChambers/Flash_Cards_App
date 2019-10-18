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

export const getData=()=>initialData

export function saveDeckTitle(title){
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
[title]:{
    title: title,
    questions:[]
}
    }))
}