import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './PokemonType.css';

// Components
import PokemonTypeLabel from './PokemonTypeLabel';

const PokemonTypeToggleButton = (props) => {
  return (
    <div className="type-toggle-btn">
      <input id={props.controlId} type="checkbox" value={props.typeName} onClick={(event) => props.handleClick(event)} />
      <PokemonTypeLabel labelFor={props.controlId} typeName={props.typeName} isClickable />
    </div>
  );
};

PokemonTypeToggleButton.propTypes = {
  controlId: PropTypes.string,
  typeName: PropTypes.string,
  handleClick: PropTypes.func
};

export default PokemonTypeToggleButton;