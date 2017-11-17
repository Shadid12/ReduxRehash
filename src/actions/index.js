export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacterbyId(id) {
    const action = {
        type: ADD_CHARACTER,
        id
    }
    return action;
}
