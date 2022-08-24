# useEffect

## Basic usage

The useEffect hook is used to handle side effects. Every time the DOM renders the useEffect is called. Each render has its own effects and its own state.

```js

  useEffect(() => {
        setTimeout(() => {
            setRandom(Math.random())
        }, 3000);
      });

 return (
        <p>{random}</p>
    )
```

## Provide dependecies

The useEffect hook has an optional dependencies array. This is a list of variables(or functions) that decides if the useEffect hook should be executed. If any value in the dependecy array has changed since last render, the useEffect hook will be executed. Tip: You can provide an empty array to execute the useEffect hook once(because an empty array will never change over time).

```js
const [count, setCount] = useState(0);

  useEffect(() => {
    alert(`You clicked ${count} times`);
  }, [count]);

   useEffect(() => {
    alert(`Will only happen once`);
  }, []);

```
<br>


#### 📌 Single `useEffect` call 
Create a `useEffect` hook that alert `"Welcome to the application"` ONLY the first time you start up the application. 

<details><summary>Solution</summary>

```jsx
useEffect(() => {
    alert("Welcome to the application");
  }, []);
}
```
</details>
<br>


#### 📌 Create a new useEffect hook
Create a button that increments a value every time the button is clicked. Then create a `useEffect` hook to update the document title with `document.title` every time the value changes.

<details><summary>Solution</summary>

```jsx
const [count, setCount] = useState(0);

useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

return (
    <button onClick={() => setCount(count + 1)}>
        Increment
    </button>
);
```
</details>







