import IteratePokemon from '../components/iteratePokemon';
import withStyles from '../shared/withStyles.component';
import { Provider, Client} from 'urql';

const client = new Client({ url: 'https://graphql-pokemon.now.sh' })

const App = () => 
 <Provider client={client}>
    <IteratePokemon />
 </Provider>

export default withStyles(App)
