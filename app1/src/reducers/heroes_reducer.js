import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_HEROES } from "../actions/index";

function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            let heroes = [...state, createCharacter(action.id) ];
            return heroes;
        case REMOVE_HEROES:
            let heroesList = state.filter( item => item.id !== action.id);
            return heroesList;
        default:
            return state;
    }
}

function createCharacter(id) {
    let characters = characters_json.find( c =>  c.id == id);
    return characters;
}

export default heroes;