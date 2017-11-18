import characters_json from '../data/characters.json';
import { ADD_CHARACTER, ADD_CHARACTER_TO_LIST } from "../actions/index";

function characters(state = characters_json, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let charecters = state.filter( item => item.id !== action.id);
            return charecters;
        case ADD_CHARACTER_TO_LIST:
            state = [...state, getCharecter(action.id)];
            return state;
        default:
            return state;
    }
}

function getCharecter(id) {
    let character = characters_json.find( c =>  c.id == id);
    return character;
}

export default characters;