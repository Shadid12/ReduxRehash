import React, { Component } from 'react';
import Characters from './Characters';
import Heroes from './Heroes'

class App extends Component {
    render() {
        return(
            <div>
                <h2>Lame Squads</h2>
                <Characters />
                <Heroes/>
            </div>
        )
    }
}

export default App;