import React from "react";
import Avatar from "./Avatar";

const PokemonGallery = ({
  pokemonList,
  selectedPokemon,
  handleSelectPokemon,
}) => {
  return (
    <div className="gallery-container">
      {pokemonList.map(({ name, id }) => {
        return (
          <div
            key={id}
            className={
              selectedPokemon.some((selected) => selected.id === id)
                ? "selected"
                : ""
            }
            onClick={() => handleSelectPokemon({ name, id })}
          >
            <Avatar
              name={name}
              imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonGallery;
