import React, { Component } from 'react';
import {connect} from 'react-redux';

class Characters extends Component {
    render() {
        console.log('props', this.props);
        return(
            <div>
                <h4>Characters</h4>
                <ul>
                    {
                        this.props.characters.map((ch) => {
                            return (
                                <li key={ch.id}>
                                    {ch.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        characters: state.characters
    }
}

export default connect(mapStateToProps, null)(Characters);