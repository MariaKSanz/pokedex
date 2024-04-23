import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import {useState} from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handlePreviousClick = () => {
    setPokemonIndex(pokemonIndex - 1)
  }

  const handleNextClick = () => {
    setPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div>
      {pokemonIndex > 0 ? <button onClick={handlePreviousClick}>Previous</button> : ''}
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {pokemonIndex < pokemonList.length - 1 ? <button onClick={handleNextClick}>Next</button> : ''}
    </div>
  )
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  }
];

export default App
