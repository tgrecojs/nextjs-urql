import React from "react";
import { Connect, query } from "urql";
import { StyledButton } from '../shared/styles'
import Pokemon from './pokemon';

const PokemonQuery = query(`
  query ($first: Int!) {
      pokemons(first: $first) {
          id
          name
        }
  }
`, { first: 10 });


export default class IteratePokemon extends React.Component {
  state = { selected: 'UG9rZW1vbjowMDE='};
  
  selectPokemon = id => {
    this.setState({
      selected: id
    });
  };
  render() {
    return (
      <div style={{
      display: 'flex', 
      justifyContent: 'space-around'
    }}>
        <Connect
          query={PokemonQuery}
          children={({ loaded, data }) => loaded === false ? (
              "loading"
            ) : (
              <div>
                  {data.pokemons.map(d => (
                      <StyledButton
                      key={d.id}
                        onClick={this.selectPokemon.bind(null, d.id)}
                      >
                        <h2>{d.name}</h2>
                    </StyledButton>
                  ))}
              </div>
            )
          }
        />
          <Pokemon id={this.state.selected} />
      </div>
    );
  }
}
