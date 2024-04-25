import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import {useState} from "react";
import {NavBar} from "./components/NavBar.jsx";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div>
      <NavBar setIndex={setPokemonIndex} list={pokemonList}/>
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
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
