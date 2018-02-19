import React from "react";
import { Connect, query } from "urql";

const QueryString = `
  query ($id: String) {
    pokemon(id: $id) {
      id
      name
      image
      height {
        minimum
        maximum
      }
    }
  }
`;

const Pokemon = ({ id }) => (
    <Connect
      query={query(QueryString, { id })}
      cache={true}
      children={({ loaded, data }) => {
        return (
          <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          width: '500px'
        }}>
            {loaded === false ? (
              <p>Loading</p>
            ) : (
              <div style={{
              background: 'white',
              padding: '1em',
              marginTop: '24px',
              height: '500px',
              border: '2px solid black',
              borderRadius: '10px'
            }}>
                <h2>Name: {data.pokemon.name}</h2>
                <h4>Max height: {data.pokemon.height.maximum}</h4>
                <h4>Min height: {data.pokemon.height.minimum}</h4>
                <img src={data.pokemon.image} />
              </div>
            )}
          </div>
        );
      }}
    />
);

export default Pokemon;
