export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_HEROES = 'REMOVE_HEROES';

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