import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pokemons/page/HomePage'
import PokemonsListType from './pokemons/page/PokemonsListType'
import ListTypes from './pokemons/page/ListTypes'



function App() {

  return (
    <>      
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/type-list" element={<ListTypes />} />
      <Route path="/pokemons-type-list/" element={<PokemonsListType />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
