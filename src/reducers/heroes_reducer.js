import characters_json from '../data/characters.json';
import { ADD_CHARACTER } from "../actions/index";

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

export default heroes;