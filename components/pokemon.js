import { Connect, query } from "urql";
import { pokemonDetails, flexCol} from '../shared/styles';

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

const createQuery = id => query(QueryString, { id })


const Pokemon = ({ id }) => (
    <Connect
      query={createQuery(id)}
      children={({ loaded, data }) =>
          <div style={flexCol}>
            {loaded === false ? 
              <p>loading..</p> : 
              <div style={pokemonDetails}>
                <h2>Name: {data.pokemon.name}</h2>
                <h4>Max height: {data.pokemon.height.maximum}</h4>
                <h4>Min height: {data.pokemon.height.minimum}</h4>
                <img src={data.pokemon.image} />
              </div>
            }
          </div>
      }
    />
);

export default Pokemon;
