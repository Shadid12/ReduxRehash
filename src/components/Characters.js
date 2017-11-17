import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addCharacterbyId} from "../actions/index";

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
                                    <div onClick={() => {
                                        this.props.addCharacterbyId(ch.id)
                                    } }>+</div>
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
};

const mapDispatchToProps = (dispatch, id) => {
    return bindActionCreators({ addCharacterbyId }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);