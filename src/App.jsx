import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pokemons/page/HomePage'
import PokemonListTypes from './pokemons/page/ListTypes'


function App() {

  return (
    <>      
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/type-list" element={<PokemonListTypes />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
