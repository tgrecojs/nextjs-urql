import React, { Component } from "react";
import { StyledButton, flexLayout } from '../shared/styles'
import { query, Connect } from 'urql';
import Pokemon from './pokemon';

const AllPokemonQuery = query(
`
  query($first: Int!) {
    pokemons(first: $first) {
      id 
      name
    }
  }
`, { first: 5})

export default class IteratePokemon extends Component {
  state = { selected: 'UG9rZW1vbjowMDE='};

  selectPokemon = id => this.setState({ selected: id });
  render() {
    return (
      <div style={flexLayout}>
       <Connect 
        query={AllPokemonQuery}
        children={({loaded, data}) => 
        loaded === false ? <p>loading...</p> :
        <div>
          {
            data.pokemons.map(pokeData => 
              <StyledButton key={pokeData.id}
              onClick={this.selectPokemon.bind(null, pokeData.id)}
              >
                <h2>{pokeData.name}</h2>
              </StyledButton>
            )
          }
        </div>
      }
       />
       <Pokemon id={this.state.selected} />
      </div>
    );
  }
}
