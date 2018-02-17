import React from "react";
import { Connect, query } from "urql";
import { Combined , PokemonWrapper} from '../shared/styles'
import Pokemon from "./pokemon";

const PokemonQuery = query(`
{
    pokemons(first: 10) {
        id 
        name
      }
  }
`);


export default class IteratePokemon extends React.Component {
  state = {
    selected: 'UG9rZW1vbjowMDE='
  };
  setSelected = id => {
    this.setState({
      selected: id
    });
  };
  unsetSelected = () => {
    this.setState({
      selected: null
    });
  };
  render() {
      console.log(this.state)
    return (
      <div style={{
    display: 'flex', 
      justifyContent: 
      'space-around'}}>
        <Connect
          query={PokemonQuery}
          children={({ loaded, data }) => {
              console.log(data)
            return loaded === false ? (
              "loading"
            ) : (
              <div>
                  {data.pokemons.map(d => (
                      <Combined
                      key={d.id}
                        type="button"
                        onClick={this.setSelected.bind(null, d.id)}
                      >
                        <h2>Name: {d.name}</h2>
                    </Combined>
                  ))}
              </div>
            );
          }}
        />
        {this.state.selected && (
          <Pokemon id={this.state.selected} onClose={this.unsetSelected} />
        )}
      </div>
    );
  }
}
