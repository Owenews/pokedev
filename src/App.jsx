import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pokemons/page/HomePage/HomePage'
import ListPokemonsType from './pokemons/page/ListPokemonsType/ListPokemonsType'
import ListTypes from './pokemons/page/ListType/ListTypes'
import ListPokemons from './pokemons/page/ListPokemons/ListPokemons'
import RandomPokemon from './pokemons/page/RandomPokemon/RandomPokemon'
import SearchResultPokemon from './pokemons/page/SearchResultPokemon/SearchResultPokemon'
import PokemonDetails from './pokemons/page/PokemonDetails/PokemonDetails'
import PokemonsFight from './pokemons/page/PokemonFight/PokemonsFight'
import PokemonsType from './pokemons/page/PokemonsType/PokemonsType'


function App() {

  return (
    <>      
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemons-list" element={<ListPokemons />} />
      <Route path="/pokemons-list/:name" element={<ListPokemons />} />
      <Route path="/list-type" element={<ListTypes />} />
      <Route path="/list-type:name" element={<ListTypes />} />
      <Route path="/pokemons-type-list/:type?" element={<ListPokemonsType />} />
      <Route path="/random-pokemon/" element={<RandomPokemon />} />
      <Route path="/search-results/" element={<SearchResultPokemon />} /> 
      <Route path="/pokemons-details/:name" element={<PokemonDetails />} />
      <Route path="/pokemons-type/:type" element={<PokemonsType />} />
      <Route path="/pokemon-fight" element={<PokemonsFight />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
