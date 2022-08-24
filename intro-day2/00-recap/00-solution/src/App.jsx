import React, { useState } from 'react'

import Avatar from "./Avatar"
import pokemonList from "./pokemon"

const Pokemon = ({ first, second, third }) => {
  const [pokeState, setPokeState] = useState(1)

  const handleClick = () => {
    setPokeState(pokeState < 3 ? pokeState + 1 : 1)
  }

  return <div onClick={handleClick}>
    { pokeState === 1 && <Avatar {...first} /> }
    { pokeState === 2 && <Avatar {...second} /> }
    { pokeState === 3 && <Avatar {...third} /> }
    <img src={second.imageUrl} style={{width: 0}} />
    <img src={third.imageUrl} style={{width: 0}} />
  </div>
}

const App = () => 
  pokemonList.map(({ id, ...pokemon }) =>
   <Pokemon key={id} {...pokemon} />
  )

export default App
