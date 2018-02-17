import { Provider, Client } from 'urql';
import Pokemons from '../components/iteratePokemon';
import withStyles from '../shared/withStyles.component';

const client = new Client({
    url: "https://jvnqnnxpp.lp.gql.zone/graphql"
});
  
const pokeClient = new Client({ url: 'https://graphql-pokemon.now.sh'})

const App = () => (
  <Provider client={pokeClient}>
    <Pokemons />
  </Provider>
);

export default withStyles(App)
