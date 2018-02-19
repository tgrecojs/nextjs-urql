import React from "react";
import { Connect, query } from "urql";
import { Combined as PDiv } from '../shared/styles'
import Pokemon from './pokemon';

const PokemonQuery = query(`
  query ($first: Int!){
      pokemons(first: $first) {
          id
          name
        }
  }
`, { first: 5 });


export default class IteratePokemon extends React.Component {
  state = { selected: 'UG9rZW1vbjowMDE='};
  setSelected = id => {
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
                      <PDiv
                      key={d.id}
                        type="button"
                        onClick={this.setSelected.bind(null, d.id)}
                      >
                        <h2>{d.name}</h2>
                    </PDiv>
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
