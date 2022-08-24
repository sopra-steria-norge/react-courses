import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HelperAPI from "./HelperAPI";
import PokemonGallery from "./PokemonGallery";
import Title from "./Title";
import FusedPokemon from "./FusedPokemon";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon([...selectedPokemon, pokemon].slice(-2));
  };

  const handleGetPokemon = () => {
    setSelectedPokemon([]);
    HelperAPI.getPokemon().then((pokemon) => {
      setPokemonList(pokemon);
    });
  };

  useEffect(() => {
    handleGetPokemon();
  }, []);

  const [firstSelected, secondSelected] = selectedPokemon;

  return (
    <div className="App">
      <Title />
      <button onClick={handleGetPokemon}>Refresh</button>
      <PokemonGallery
        pokemonList={pokemonList}
        selectedPokemon={selectedPokemon}
        handleSelectPokemon={handleSelectPokemon}
      />
      <FusedPokemon first={firstSelected} second={secondSelected} />
    </div>
  );
};

export default App;
