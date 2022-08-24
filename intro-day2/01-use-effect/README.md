# useEffect

## Basic usage

The `useEffect` hook is used to handle side effects. Every time the DOM renders the `useEffect` is called before the new DOM is painted to the screen. Each render has its own effects and its own state.

```js
const [count, setCount] = useState(0);

  ``useEffect``(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Provide dependecies

The `useEffect` hook has an optional dependencies array. This is a list of variables(or functions) that decides if the `useEffect` hook should be executed. If any value in the dependecy array has changed since last render, the useEffect hook will be executed. 
MAIN RULE: Every variable or method used inside the `useEffect` hook should be listed as an dependency in the deps array.

```js
const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`You clicked ${count} times`);
  }, [count]);

```

## Empty dependecy array
You can provide an empty array to execute the `useEffect` hook once when the application renders for the first time. This is because an empty array does not have any variables that will change over time.

```js
const [count, setCount] = useState(0);
   useEffect(() => {
    alert(`Will only happen when the application starts`);
  }, []);

```






