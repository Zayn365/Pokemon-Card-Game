import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const elements = this.props.cards.map(
      ({ type, name, id, base_experience }) => (
        <div className="card-container" key={id}>
          <div className="Card">
            <h3 className="space">{name}</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <p>Element: {type}</p>
            <p>Base Power: {base_experience}</p>
          </div>
        </div>
      )
    );

    return <div className="container">{elements}</div>;
  }
}

export default Pokemon;

Pokemon.defaultProps = {
  cards: [
    { id: 4, name: "Charmander", type: "fire", base_experience: 62, },
    { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
    { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
    { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
    { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
    { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
    { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
    { id: 133, name: "Eevee", type: "normal", base_experience: 65 },
  ],
};
