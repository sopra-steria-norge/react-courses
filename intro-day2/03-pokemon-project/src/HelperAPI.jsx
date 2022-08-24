const getIdFromUrl = url => parseInt(url.split("/").slice(-2)[0]);

const getPokemonFromNameAndUrl = ({ name, url }) => {
  const id = getIdFromUrl(url);
  return {
    name,
    id,
    imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
    apiUrl: url,
  };
}

const getPokemon = () => {
  return fetch(
    `https://pokeapi.co/api/v2/pokemon-form?offset=${Math.floor(
      Math.random() * 103
    )}&limit=22`
  )
    .then(res => res.json())
    .then(data => data.results.map(getPokemonFromNameAndUrl));
};

export default {
  getPokemon,
};
