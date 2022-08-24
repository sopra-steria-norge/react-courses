# Handling events

## Event handling

Handling events in React is almost the same as normal javaScript and HTML. Either way, React uses a special synthetic Event that functions can get hold of, and create logic for what should occur next. Eventhandling is tightly coupled with the use of state. Every event that can be captured through an JSX-element in react is prefixed by `on`, i.e. `on`Click, `on`DoubleClick, `on`KeyPressed, `on`Submit etc.

Example usage for how one can capture events with functions in react. The functions can be defined with different syntax, the same goes for registrating the call in a given JSX-element.

```js
const Example = () => {

    const handleEvent = (e) => {
        // do something with the event
    }

    return <div onClick={handleEvent}></div>
}

```
```js
const Example = () => {

    function handleEvent(e){
        // do something
    }

    return <div onClick={e => handleEvent(e)}></div>
}

```
```js
const Example = () => {
    const [someState, setSomeState] = useState(/* some initial value */)

    const handleEvent = e => setSomeState(/* update state */)

    return <div onClick={e => handleEvent(e)}></div>
}

```

<br>


#### 📌 A1 - Create a counter.

Create a component that keeps track of a count. Create buttons that increments and decrements the value of the count with the use of the `onClick` event.

<details><summary>🔑 Solution</summary>
<br>

Solution 1: Inline setState functions directly in the JSX-abbreviation of the `<button>` html element
```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    return (
    <React.Fragment>
        <h1>My count: {count}</h1>
        <button onClick={() => setState(count + 1)}>Increment by 1</button>
        <button onClick={() => setState(count + 1)}>Decrement by 1</button>
    <React.Fragment>
    )
}
```

<br>

Solution 2: Creating named functions.
<br>

```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    
    const decrement = () => setCount(count - 1);

    return (
    <React.Fragment>
        <h1>My count: {count}</h1>
        <button onClick={increment}>Increment by 1</button>
        <button onClick={decrement}>Decrement by 1</button>
    <React.Fragment>
    )
}
```

<br>

Solution 3 securing correct state.

```jsx
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);
    
    const decrement = () => setCount(prevCount => prevCount - 1);

    return (
    <React.Fragment>
        <h1>My count: {count}</h1>
        <button onClick={increment}>Increment by 1</button>
        <button onClick={decrement}>Decrement by 1</button>
    <React.Fragment>
    )
}
```
</details>

<br>

#### 📌 A2 - Rectangle changing color.

Create a rectangle that changes color when your mouse hovers over the element.

tips: `onMouseEnter` and `onMouseLeave` events.

rectangle div styles

```js
<div style={{width: 250, height: 250, backgroundColor: /* white, blue, black, yellow, purple  */}}>
</div>
```

<details><summary>🔑 Solution</summary>
<br>

The state defined by useState has the naming convention offered by JS-Objects. i.e.

```js
const backgroundColor = "white";

const myObject = {
    backgroundColor: backgroundColor
}

//shorthand
const myObjectWithShorthand = { backgroundColor }

// myObject === myObjectWithShortand (true)
```
```jsx
const Counter = () => {
    const [backgroundColor, setBackgroundColor] = useState("white");

    const handleMouseEnter = () => setBackgroundColor("purple");

    const handleMouseLeave = () => setBackgroundColor("white");

    return (
    <React.Fragment>
        <div
        style={{width: 250, height: 250, backgroundColor}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
        </div>
    <React.Fragment>
    )
}
```
</details>

<br>

#### 💎 Combine A1 and A2 by using a single state Object

Use A1 and A2 and combine both their states into a javaScript-Object. The main component should include the behaviour from A1 and A2; incrementing and decrementing a count, and a `<div>` that changes color when hovering over it. This exercise focus on becoming comfortable with the usage and handling of javascript objects. 

<details><summary>🔑 Solution</summary>

The solution can be written in numerous ways based on javascript preferences with objects and function handling.
All the examples are doing the exact same. 

```jsx
setState({ backgroundColor, count}) => {
    return { backgroundColor, count: count + 1}
})

setState(prevState => {
    return { ...prevState, count: prevState.count + 1}
});

setState(prevState => {
    return { backgroundColor: prevState.backgroundColor, count: prevState.count + 1 }
})

//Personal favorite by always destructuring and using shorthand object return. if the state object is large, update only the object entry that you want.

setState(({ count, ...prevState}) => ({ ...prevState, count: count + 1}))
```
<br>

```jsx
const App = () => {
  const [state, setState] = useState({ backgroundColor: "white", count: 0 })

  const increment = () => setState(prevState => {
    return { backgroundColor: prevState.backgroundColor, count: prevState.count + 1 }
  });
  
  const decrement = () => setState(({ count, ...prevState}) => ({
    ...prevState, count: count - 1})
  )

  const handleMouseEnter = () => setState(prevState => ({
      count: prevState.count, backgroundColor: "purple"
  }));

  const handleMouseLeave = () => setState(prevState =>  ({
      ...prevState, backgroundColor: "white"
  }));

  const {
      count,
      backgroundColor
  } = state;

  return (
      <React.Fragment>
          <div
          style={{width: 250, height: 250, backgroundColor}}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          />
          <h1>My count: {count}</h1>
          <button onClick={increment}>Increment by 1</button>
          <button onClick={decrement}>Decrement by 1</button>
      </React.Fragment>
  )
}
```
</details>

