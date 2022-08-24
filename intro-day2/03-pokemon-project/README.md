# Pokemon Fusion Project

Project demo of the final product [PokemonFusion](https://react-kurs-dag2.web.app)

## Project description

Hi and welcome to **Project Pokemon Fusion**. In this module of our react course, we will be making a web-application that fuses two pokemon together into a fused version! The project will use an external API that has information about every single pokemon that exists.

Our thought process went something like this: To grasp React, our course-participants must develop an application with an external API. Getting hands-on experience for how React uses real data and external APIs is crucial, and thus we chose to create something with the nostalgic feel of pokemon.

## Spec and goals

The main goal is that the participant should gain knowledge in the following areas of React.

- Thinking in React; Components and modularity (reusable pieces of code and GUI-elements)
- Sending properties (props) from component to component (Parent / Child relationship)
- Be able to create interactivity with common hooks (useEffect and useState) and asynchronous HTTP-requests

### Top level spec

This is the top-level spec for the application. What should **Pokemon Fusion** do?

- Fetch and store information about an array of Pokemon.
- Use the external pokemon-API
- Split application-logic into reusable components
- Handle click events. Which pokemon does the user want to fuse?
- Handle a click event that fuses the chosen pokemon.
- The UX should be as simple as possible

## Project Overview

The project overview will introduce the data we're going to working with and the `HelperAPI` we've made to help with abstactring away http-requests in a more seamless fashion.

### HelperAPI and data

We have provided a `HelperAPI` that does a lot of the work behind the scenes, but you must issue the request yourself, and handle the response that you get. Our HelperAPI contains one method `getPokemon()`, and can be used in the following way throughout the applcation.

```jsx
import HelperAPI from "./HelperAPI";

HelperAPI.getPokemon(); // returns a Promise with an array of pokemon objects
```

Examples for handling a Promises given by the helper function.

```jsx
HelperAPI.getPokemon().then((data) => {
  // Do something with the data
});
```

Below is a payload from the `HelperAPI.getPokemon()` API-request. The data contains an array of pokemon objects. Each object contains three properties: `name`, `id` and `imageUrl`.

```js
[
  {
    "name": "bulbasaur",
    "id": 1,
    "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "apiUrl": "https://pokeapi.co/api/v2/pokemon-form/1/"
  },
  {
    "name": "ivysaur",
    "id": 2,
    "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "apiUrl": "https://pokeapi.co/api/v2/pokemon-form/2/"
  },
  {
    "name": "venusaur",
    "id": 3,
    "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "apiUrl": "https://pokeapi.co/api/v2/pokemon-form/3/"
  }
]
```

<br>

## Project guide

<br>

### 📌 Task 1: Create a title for your application

Create a new file called: `Title.jsx`. This component must have className `title` and have a propper title for your application.
Render the newly created component in `App.jsx`

<br>
<details><summary>🔑 Solution</summary>
<br>

```jsx
// Title.jsx
import React from "react";

const Title = () => {
  return <h1 className="title">Pokemon Fusion</h1>;
};

export default Title;
```

```jsx
// App.jsx
import React from "react";
import Title from "./Title";

const App = () => {
  return (
    <div className="App">
      <Title />
    </div>
  );
};

export default App;
```

</details>
<br><br>

### 📌 Task 2: Populate state with pokemon

The first thing we want to do is using the `helperAPI` to fetch pokemon for our application. The fetch request will be executed when the application start up for the first time, and the result should be stored as state in our `App.jsx`.

`App.jsx` must have the following functionality:

- A unique state `pokemonList` to store pokemon.
- A function to fetch pokemon only the first time the application render.
- A return function to display the number of pokemons in `pokemonList`.

<br>
<details><summary>🔑 Solution</summary>
<br>

```jsx
// App.jsx
import React, { useState, useEffect } from "react";
import Title from "./Title";
import HelperAPI from "./HelperAPI";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    HelperAPI.getPokemon().then((pokemon) => {
      setPokemonList(pokemon);
    });
  }, []);

  return (
    <div className="App">
      <Title />
      <p>Number of pokemon: {pokemonList.length}</p>
    </div>
  );
};

export default App;
```

</details>
<br><br>

### 📌 Task 3: List all pokemon names

In this task will we create a new component named `PokemonGallery` that render a list of all pokemon fetched from the `helperAPI`.

The `PokemonGallery` component must have the following functionality:

- Take the `pokemonList` as its only property.
- Render a `div` with the className `gallery-container`.
- Iterate over `pokemonList` and render a `<p>` tag containing the pokemon name of each pokemon.

<br>
<details><summary>🔑 Solution</summary>
<br>

```jsx
// App.jsx
import PokemonGallery from "./PokemonGallery";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  //...

  return (
    <div className="App">
      <Title />
      <PokemonGallery pokemonList={pokemonList} />
    </div>
  );
};
```

```jsx
// PokemonGallery.jsx
import React from "react";

const PokemonGallery = ({ pokemonList }) => {
  return (
    <div className="gallery-container">
      {pokemonList.map(({ name, id }) => (
        <p key={id}>{name}</p>
      ))}
    </div>
  );
};

export default PokemonGallery;
```

</details>
<br><br>

### 📌 Task 4: A gallery with pokemon avatars

In task 4 we will improve our `PokemonGallery` by changing how our pokemon are displayed.
The `PokemonGallery` will now use the existing component `Avatar.jsx` to display our pokemon.

The `PokemonGallery` must now have the following functionality:

- Iterate over the `pokemonList` to return a `<Avatar />` components for each pokemon.
  - Wrap each avatar with a `div`.
- Each `Avatar` component must recieve the props: `name` and `imageUrl` from each pokemon.
  - The `imageUrl` from the api will be used to get an image of a pokemon. i.e. `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`.

<br>
<details><summary>🔑 Solution</summary>
<br>

```jsx
// PokemonGallery.jsx
import React from "react";
import Avatar from "./Avatar";

const PokemonGallery = ({ pokemonList }) => {
  return (
    <div className="gallery-container">
      {pokemonList.map(({ name, id, imageUrl }) => {
        return (
          <div key={id}>
            <Avatar
              name={name}
              imageUrl={imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonGallery;
```

```jsx

```

</details>
<br><br>

### 📌 Task 5: Create refresh button

The helperAPI `getPokemon()` function returns a number of random pokemon. Now we want to add a button to fetch again if we are not happy with the pokemon we recieved. Lets modify the `App.tsx` by doing the following:

- Render a new `<botton>` tag with a `onClick` handler and the text `Refresh`.
- Move the fetch logic to a seperate function called `handleGetPokemon` to be reused.
- Make sure the `handleGetPokemon` function is executed both when the application is loaded for the first time and when the random button is clicked.

<br>
<details><summary>🔑 Solution</summary>
<br>

```jsx
// App.jsx
import React, { useState, useEffect } from "react";
import HelperAPI from "./HelperAPI";
import PokemonGallery from "./PokemonGallery";
import Title from "./Title";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);

  const handleGetPokemon = () => {
    HelperAPI.getPokemon().then((pokemon) => {
      setPokemonList(pokemon);
    });
  };

  useEffect(() => {
    handleGetPokemon();
  }, []);

  return (
    <div className="App">
      <Title />
      <button onClick={handleGetPokemon}>Refresh</button>
      <PokemonGallery pokemonList={pokemonList} />
    </div>
  );
};

export default App;
```

</details>
<br><br>

### 📌 Task 6: Select pokemon for fuse

The next step is to implement functionality for selecting two pokemon that will be fused. We will need a state to keep track of which pokemon that are selected, and an event handler to select a given pokemon.

The following functionality is needed:

- A state `selectedPokemon` to keep track of the selected pokemon. The state should be initialized as an empty array and later be populated with pokemon objects.
- An `handleSelectPokemon()` event handler that push a new pokemon to the `selectedPokemon` list. The handler should also slice the list so that it never exceeds the length of 2.
  - Adding `pokemon1` to `[]` should return `['pokemon1']`.
  - Adding `pokemon2` to `['pokemon1']` should return `['pokemon1', 'pokemon2']`.
  - Adding `pokemon3` to `['pokemon1', pokemon2']` should return `['pokemon2', 'pokemon3']`.
- The event handler should be passed down as a prop to `PokemonGallery`. The handler should execute when a pokemon container is clicked.
- The `selectedPokemon` state should be passed down as a prop to `PokemonGallery` and be used to dynamically set a className on the `div` container. If the `selectedPokemon` list contains the given pokemon, the `div` should have the className `selected`. This will render an effect on the selected pokemon.

<br>
<details><summary>🔑 Solution</summary>
<br>

```jsx
// App.jsx
const App = () => {
  // ...

  const [selectedPokemon, setSelectedPokemon] = useState([]);

  // ...

  const handleSelectPokemon = (pokemon) => {
    setSelectedPokemon([...selectedPokemon, pokemon].slice(-2));
  };

  return (
    <div className="App">
      <Title />
      <button onClick={handleGetPokemon}>Refresh</button>
      <PokemonGallery
        pokemonList={pokemonList}
        selectedPokemon={selectedPokemon}
        handleSelectPokemon={handleSelectPokemon}
      />
    </div>
  );
};

export default App;
```

```jsx
// PokemonGallery.jsx
import React from "react";
import Avatar from "./Avatar";

const PokemonGallery = ({
  pokemonList,
  selectedPokemon,
  handleSelectPokemon,
}) => {
  return (
    <div className="gallery-container">
      {pokemonList.map(({ name, id, imageUrl }) => {
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
              imageUrl={imageUrl}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PokemonGallery;
```

</details>
<br><br>

### 📌 Task 7: Select pokemon for fuse

The final leap to complete the application comes by introducing a new component that will display our "fused" pokemon. The new component `FusedPokemon.jsx` will receive two props; the two pokemon that are selected. An important note is that the pokemon that we have chosen may not exist; hence we need to check for their existence.

- Create a new file called `FusedPokemon.jsx`
- `FusedPokemon` must recieve two props: `first` and `second`.
- The displayed pokemon should reuse `Avatar`.
- `FusedPokemon` must use conditions to only render the avatar if `first` and `second` exist.
- The `name` prop on `Avatar` should be a combination of the first half + second half of each name.
- Avatar must have className=`fusedPokemon`.
- The `imageURL` prop provided to the `Avatar` component should have the following format:
  - `https://images.alexonsager.net/pokemon/fused/`firstId`/`firstId`.`secondId`.png`

<br>
<details><summary>🔑 Solution</summary>
<br>

```jsx
// FusedPokemon.jsx
import React from "react";
import Avatar from "./Avatar";

const FusedPokemon = ({ first = null, second = null }) => {
  return (
    first &&
    second && (
      <Avatar
        className="fusedPokemon"
        name={
          first.name.substring(0, Math.ceil(first.name.length / 2)) +
          second.name.substring(Math.floor(second.name.length / 2))
        }
        imageUrl={`https://images.alexonsager.net/pokemon/fused/${first.id}/${first.id}.${second.id}.png`}
      />
    )
  );
};

export default FusedPokemon;
```

```jsx
// App.jsx

// ...imports
import FusedPokemon from "./FusedPokemon";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  /*
    ... component functions
  */

  const [firstSelected, secondSelected] = selectedPokemon;

  return (
    <div className="App">
      {/* ... components*/}
      <FusedPokemon first={firstSelected} second={secondSelected} />
    </div>
  );
};

export default App;
```

</details>
<br><br>

### 💎 Bonus 1: Toggle fuse combination

As you may have discovered, two pokemon can be fused together in two different ways. In this bonus task, we will implement functionality to switch between the two combinations by clicking on the fused pokemon.

Alter the `FusedPokemon` to have the following functionality:
- A `toggle` state and a `handleToggle()` function that changes each time the fused pokemon is clicked.
- A new array that copies `first` and `second` in different orders based on `toggle` and use this new array to render name and image to the `<Avatar />` component.


<br>
<details><summary>🔑 Solution</summary>
<br>

```jsx
// FusedPokemon.jsx
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
```


</details>
<br><br>
