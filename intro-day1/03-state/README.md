# State with useState hook

## useState

`useState` is one of many ways in which you can describe state in react. State is essential; it's what creates the layer in which you create websites that are dynamic and and reacts to how you're using a web application.

The useState hook, and all other hooks are represented by the prefix of `use`. Here's an example of the useState hook, that keep track of component state.

```js
const [state, setState] = useState(initialValue);
```

The `useState(initValue)` returns an array of two elements, the first one is the actual state, which is initialized with the argument passed to `useState`. The second argument in the list that is returned contains a function that we can use to alter the state. The state variable is typically named after its content, and the function that modifies the state is prefixed with `set`.
Therefore, for a state containing a single name, the variable names name and setName are used.

Lets say we have a name. the useState naming convention becomes `const [name, setName] = useState("myName")`.

<br>

## Lab

#### 📌 A1 - Create a state that keeps track of a `count`, with the initial value `0`

Apply the useState hook and display the value.

<details><summary>🔑 Solution</summary>

```jsx
const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>{count}</div>
        </div>
    )
}
```
</details>

<br>

#### 📌 A2 - Add two new states and display both `string` and `boolean` values.

Add two new states, one that displays your `name` and/or `boolean` value for if you own a car. You can use `useState` multiple times.

<details><summary>🔑 Solution</summary>

```jsx
const App = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Joergen");
    const [hasCar, setHasCar] = useState(false);

    return (
        <div>
            <div>{count}</div>
            <div>{name}</div>
            <div>{hasCar}</div>
        </div> 
    )
}
```
</details>

<br>

#### 💎 A3 - Create state and display state with JavaScript-Objects and lists

Refactor all the previously declared states by creating a single state with a javaScript object. Also, create state with some of your favorite colors using a list.

```jsx
const [someState, setSomeState] = useState({ entry: "entry" })
```

<details><summary>🔑 Solution</summary>
<br>

```js
const App = () => {
    const [state, setState] = useState(
        {count: 0, name: "Joergen", hasCorona: false }
        );

    const [favColors, setFavColors] = useState(
        ["pink","blue", "red"]
        );

    const {
        count,
        name,
        hasCorona
    } = state;

    const [ pink, blue, red ] = favColors;

    return (
        <div>
            <div>{count}</div>
            <div>{name}</div>
            <div>{hasCorona}</div>
            <ul>
                <li>{pink}</li>
                <li>{blue}</li>
                <li>{red}</li>
            </ul>
        </div> 
    )
}
```
</details>

<br>

#### 💎 A4 - Create a computationally expensive initial state.

For those with time left: Initialize the useState hook with a computationally expensive task. A computationally expensive task can be computing any given fibonacci number given by a number `n`.

Create an external function that computes (the expensive part), and create a callback within the `useState` hook.


<details><summary>🔑 Solution</summary>

```js

function fibonacci(num){
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

const Fibo = ({ n }) => {
    const [fibo, setFibo] = useState(() => {
        const fiboNum = fibonacci(n);
        return fiboNum;
    })

    <div>{`Fibonacci for num = ${n}: ${fibo}`}</div>
}

const App = () => <Fibo n={5} />;
```
</details>


<br>

## Further reading

There are more advanced features in React where one can store state within a component. Take a closer look at the
`useReducer` hook that provides more structure for complex state management. [Click here for more information about useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer).
