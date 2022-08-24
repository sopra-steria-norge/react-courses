CHAIN_IDS = 500
MAX_IMG = 633

const fs = require('fs')
const fetch = require('node-fetch')

const url = id => `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
const name = id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(res => res.forms[0].name)
    .then(([first, ...rest]) => first.toUpperCase() + rest.join(""))
const chain = id => fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`)
    .then(res => res.json())
    .then(res =>
        res.chain.evolves_to.length
        && res.chain.evolves_to[0].evolves_to.length
        && [res.chain.species.url, res.chain.evolves_to[0].species.url, res.chain.evolves_to[0].evolves_to[0].species.url]
    )
    .then(chain => chain && chain.map(url => url.split("/").slice(-2)[0]))
    .catch(e => [])

const chainToString = async (id, [id1, id2, id3]) => `{
    id: ${id},
    first: {
        name: "${await name(id1)}",
        imageUrl: "${url(id1)}",
    },
    second: {
        name: "${await name(id2)}",
        imageUrl: "${url(id2)}",
    },
    third: {
        name: "${await name(id3)}",
        imageUrl: "${url(id3)}",
    }
}`


Promise.all(
    [...Array(CHAIN_IDS).keys()]
        .map(i => chain(i + 1))
)
    .then(chains => chains.filter(chain => chain && chain.length === 3 && chain[0] <= MAX_IMG))
    .then(chains => chains.map((chain, i) => chainToString(i, chain)))
    .then(chains => Promise.all(chains))
    .then(pokemon =>
        fs.writeFile(
            'src/pokemon.js',
            `const pokemon = [${pokemon.join(",")}]

export default pokemon
`,
            (e) => console.log(e)
        )
    )
