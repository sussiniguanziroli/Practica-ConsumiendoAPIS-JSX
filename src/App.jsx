import { Pokemon } from './components/Pokemon';
import { ItemListContainer } from './components/ItemListContainer'
import { Header } from "./components/header/Header"
import './css/main.css'
import  PokemonList  from './components/PokemonList';

function App() {

    const numerito = 1;
    return (
        <>
            <Header numerito={numerito} />
            <ItemListContainer />
            <PokemonList />
        </>
    )
}

export default App
