export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_HEROES = 'REMOVE_HEROES';
export const ADD_CHARACTER_TO_LIST = 'ADD_CHARACTER_TO_LIST';

export function addCharacterbyId(id) {
    const action = {
        type: ADD_CHARACTER,
        id
    };
    return action;
}

export function removeHeroesById(id) {
    const action = {
        type: REMOVE_HEROES,
        id
    };
    return action;
}

export function addCharecterToList(id) {
    const action = {
        type: ADD_CHARACTER_TO_LIST,
        id
    };
    return action;
}