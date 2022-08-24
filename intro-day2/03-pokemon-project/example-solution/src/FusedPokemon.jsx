import React, { useState } from 'react';
import Avatar from './Avatar';

const FusedPokemon = ({ first = null, second = null }) => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => setToggle(toggle => !toggle);
    
    const [one, two] = toggle ? [first, second] : [second, first]

    return first && second &&
    <div onClick={handleToggle}>
        <Avatar
            className="fusedPokemon"
            name={one.name.substring(0, Math.ceil(one.name.length / 2))
                + two.name.substring(Math.floor(two.name.length / 2))
            }
            imageUrl={`https://images.alexonsager.net/pokemon/fused/${one.id}/${one.id}.${two.id}.png`}
        />
    </div>
}

export default FusedPokemon;