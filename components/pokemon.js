import React from "react";
import { Connect, query } from "urql";

const QueryString = `
  query Pokemon($id: String) {
    pokemon(id: $id) {
      id
      name
      image
      evolutions { id }
      height {
        minimum
        maximum
      }
    }
  }
`;

const flexCol = {
    display: 'flex',
    flexDirection: 'column'
}
const Pokemon = ({ id, onClose }) => (
    <Connect
      query={query(QueryString, { id: id })}
      children={({ loaded, data }) => {
        return (
          <div style={{ 
            display: 'flex',
          flexDirection: 'column',
          width: '500px'}}>
            {loaded === false ? (
              <p>Loading</p>
            ) : (
              <div>
                <h2>{data.pokemon.name}</h2>
                <h4>Max height: {data.pokemon.height.maximum}</h4>
                <h4>Min height: {data.pokemon.height.minimum}</h4>
                <img src={data.pokemon.image} />
                <button onClick={onClose}>Close</button>
              </div>
            )}
          </div>
        );
      }}
    />
);

export default Pokemon;
