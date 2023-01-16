import React, {Component} from 'react'
import './styles/Pokedex.css'
import Pokecard from './Pokecard'

class Pokedex extends Component {

  render() {
    let title
    if (this.props.isWinner) {
      <h1 className ="Pokedex-winner">Winning Hand</h1> 
    } else {
      <h1 className = "Pokedex-loser">Losing Hand</h1>
    }
    return (
      <div className='Pokedex'>
        <h1>Pokedex!</h1>
        <p>Total Experience: {this.props.exp}</p>
        <p>{this.props.isWinner ? 'WINNER' : 'LOSER'}</p>
        <div className='Pokedex-cards'>
        {this.props.pokemon.map((p)=> (
          <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
        ))}
        </div>
      </div>
    )
  }
}

export default Pokedex