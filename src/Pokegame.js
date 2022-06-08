import React,{Component} from "react";
import Pokemon from "./Pokemon";


class Pokegame extends Component {
    static defaultProps = {
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
    }
    render () {
        const hand1 = [];
        const hand2 = [...this.props.cards];
        
        while (hand1.length < hand2.length) {
        let randx = Math.floor(Math.random() * hand2.length);
        let randPokemon = hand2.splice(randx,1)[0];
        hand1.push(randPokemon);
        }
        const exp1 = hand1.reduce((exp, cards) => exp + cards.base_experience, 0);
        const exp2 = hand2.reduce((exp, cards) => exp + cards.base_experience, 0);
        
        return(
            <div>
                <Pokemon cards={hand1} exp={exp1} isWinner={exp1 > exp2} hand="Hand 1" />
                <Pokemon cards={hand2} exp={exp2} isWinner={exp2 > exp1} hand="Hand 2" />
            </div>
        )
    }
}



export default Pokegame;