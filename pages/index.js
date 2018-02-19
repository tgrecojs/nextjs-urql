import { Provider, Client } from 'urql';
import IteratePokemon from '../components/iteratePokemon';
import withStyles from '../shared/withStyles.component';

const client = new Client({ url: 'https://graphql-pokemon.now.sh'})

const App = () => <IteratePokemon />


export default withStyles(App)
