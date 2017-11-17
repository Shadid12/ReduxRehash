import React, { Component } from 'react';
import Characters from './Characters';

class App extends Component {
    render() {
        return(
            <div>
                <h2>Lame Squads</h2>
                <Characters />
            </div>
        )
    }
}

export default App;