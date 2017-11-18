import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeHeroesById, addCharecterToList} from "../actions/index";
import {bindActionCreators} from 'redux';

class Heroes extends Component {
    render () {
        return (
            <div>
                <h4>Heroes</h4>
                <ul>
                    {
                        this.props.heroes.map( (hero) => {
                            return (
                                <li key={hero.id}>
                                    <div>{ hero.name }</div>
                                    <div onClick={() => {
                                        this.props.removeHeroesById(hero.id);
                                        this.props.addCharecterToList(hero.id);
                                    } }>-</div>
                                </li>
                            )
                        } )
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        heroes: state.heroes
    }
};

const mapDispatchToProps = dispatch  => {
    return bindActionCreators({ removeHeroesById, addCharecterToList }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(Heroes);