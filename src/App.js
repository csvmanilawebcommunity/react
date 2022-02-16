import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

// Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPokemonList, resetPokemonList} from './actions/indexActions';

// Assets
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import BGM from "./assets/music/21 Pokémon Center.mp3";
import {BGM_VOLUME} from "./constants/MEDIA_SETTINGS";

// Components
import PokemonList from './components/Pokemon/PokemonList';
import Search  from './components/Search/Search';

class App extends Component {
  constructor() {
    super();
    this.pokemonSelectHandler = this.pokemonSelectHandler.bind(this);
    this.resetList = this.resetList.bind(this);
    this.basePokemonList = [];
    this.state = {
      selectedPokemon: null,
      basePokemonList: null
    };
  }
  componentWillMount() {
    this.props.getPokemonList();
  }

  componentDidUpdate()
  {
    if(this.basePokemonList.length == 0)
    {
       this.basePokemonList = this.props.pokemonList;
    }
  }

  componentWillUnmount()
  {
    this.resetList();
  }

  pokemonSelectHandler(pokemon) {
    this.setState({selectedPokemon: pokemon});
  }

  resetList(){
    this.props.resetPokemonList(this.basePokemonList);
  }

  render() {
    return (
      <div className="App">
        <div>
          <div className="pokemon-list-container">
          {/* Note: Encountered Issues on React's Modal Route so a custom one was created.
                    This comment is left here for educational/research purporses.
                    This may improve the system or be used elsewhere.
                    Bootstrap Modal was NOT used because bootstrap has some issues with the current React Router.
          <ModalRoute path='/pokedex/:id' parentPath='/'>
              <PokemonDetails />
          </ModalRoute> */}
             <Search resetPokemonList={this.resetList} pokemonCount={!this.props.pokemonList ? 0 : this.props.pokemonList.length} />
            <PokemonList pokemonList={this.props.pokemonList} pokemonSelectHandler={this.pokemonSelectHandler} />
          </div>
        </div>
        <ReactPlayer url={BGM}
            className="bgm"
            width="0"
            height="0"
            playing
            loop
            volume={BGM_VOLUME}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pokemonList: state.pokemonList
  };
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ getPokemonList, resetPokemonList }, dispatch);
}

App.propTypes = {
  pokemonList: PropTypes.array,
  getPokemonList: PropTypes.func.isRequired,
  resetPokemonList: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(App);