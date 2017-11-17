import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import { addCharacterbyId } from "./actions/index";

const store = createStore(rootReducer);
console.log(store.getState());
store.subscribe(() => console.log(store.getState()));
store.dispatch(addCharacterbyId(3));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

