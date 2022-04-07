import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className="pokemon-box">
        <div className="pokemon-informations">
          <span>Name: {name}</span>
          <span>Type: {type}</span>
          <span>Average Weight: {averageWeight.value} {averageWeight.measurementUnit}</span>
        </div>
        <div className="pokemon-image">
          <img src={image} alt={"Sprite" + name} />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.object.isRequired,
}

export default Pokemon;