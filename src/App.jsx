import './App.css'
import PokemonCard from "./components/PokemonCard.jsx";
import {useEffect, useState} from "react";
import {NavBar} from "./components/NavBar.jsx";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(
    () => {
      alert("hello pokemon trainer :)");
    },
    []
  );

  return (
    <div id="main">
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
