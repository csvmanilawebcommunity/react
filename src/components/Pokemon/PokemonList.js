import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Assets
import './PokemonList.less';

// Components
import PokemonListItem from './PokemonListItem';

export default class PokemonList extends Component {
    render() {
        if(!this.props.pokemonList) {
            return <div>Still loading!</div>;
        }
        
        return (
            <div className="pbj-pokemon-list">
                {this.props.pokemonList.map((pokemon, index) => 
                    <PokemonListItem
                        key={index}
                        pokemon={pokemon}
                        pokemonSelectHandler={this.props.pokemonSelectHandler}
                        />
                    )}
            </div>
        );
    }
}

PokemonList.propTypes = {
    pokemonSelectHandler: PropTypes.func,
    pokemonList: PropTypes.array
};