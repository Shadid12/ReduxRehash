import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from "../actions/index";
import { combineReducers } from 'redux';

function characters(state = characters_json, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let charecters = state.filter( item => item.id !== action.id);
            return charecters;
        default:
            return state;
    }
}

function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id) ];
            return heroes;
        default:
            return state;
    }
}

function createCharacter(id) {
    let characters = characters_json.find( c =>  c.id == id);
    return characters;
}

const rootReducers = combineReducers({
    characters,
    heroes
});

export default rootReducers;