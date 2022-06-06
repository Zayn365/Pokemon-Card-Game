import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const padToImg = (number) => {
      return number <= 999 ? `00${number}`.slice(-3) : number;
    };

    const title = this.props.isWinner ? "Winner" : "Loser";

    const elements = this.props.cards.map(
      ({ type, name, id, base_experience }) => (
        <div className="Pokedex-card" key={id}>
          <h2 className="">{name}</h2>
          <img
            className="img"
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToImg(
              id)}.png`}
            alt=""
          />
          <p className="">
            Element: {type}
            <br />
            Base Power: {base_experience}
          </p>
        </div>
      )
    );

    return (
      <div className="container">
        <>
          {elements}
          <p className={title}>
            {title}
          </p>
        </>
      </div>
    );
  }
}

export default Pokemon;
