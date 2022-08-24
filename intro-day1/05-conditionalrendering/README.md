# Conditional rendering

## Rendering different

Lets say that you want to display something by navigating through some tabs. What about extra functionality by a dropdown, or a menu-button? Here's where conditional rendering comes into play. Lets recap on some basic but wacky javascript specific syntax.

conditional logic by `condition ? true : false`. If the `condition` is true, return the first item (true) after `?`, if its false, return the second (false).

```js
const condition = false;

const getMessage = () => condition ? "Its true" : "Its false";

const otherMessage = () => {
    if(conditon){
        return "Its true"
    }
    return "Its false"
}

console.log(getMessage());

// console.logs "Its true"
```

The special and-operator `&&` with chaining. If the whole chain is `true`, return the item / type / component at the end.

```js
const showMessageMaybe = false && true && false && "message";

console.log(showMessageMaybe)

//console.logs "false"

const trueMessage = true && true && true && "Actually true"

console.log(trueMessage)

//console.logs "Actually true"
```

React example with `&&`. The same javascript syntax applies.


```jsx
const Header = () => <h1>Hello world!</div>;

const App = () => {

    if(/* some logic */) {
        return true ? <Header /> : null;
    }

    return (
        <React.Fragment>
            {/* the condition decides whether <Header />
            is shown */}
            { true && <Header /> }
            { false && <Header /> }
        </React.Fragment>
    )
}
```

<br>

#### 📌 A1 - Create a button that toggles some text.
<br>

Add some component-state with useState and create a button that can handle (any event of your choice) that creates a toggle effect to show and hide some text.

<details><summary>Solution</summary>
<br>

```jsx
const Text = () => <p>This is my special text</p>

const App = () => {
    const [toggleText, setToggleText] = useState(false);

    return (
        <React.Fragment>
            <button onClick={() => setToggleText(!toggleText)}>Toggle text</button>
            {toggleText && <Text />}
        </React.Fragment>
    )
}
```
</details>

<br>

#### 📌 A2 - Multiple tabs with Text
<br>

Add some component state that manages which tab the user is currently on. Create a component `<Character />` that recieves the  `name` prop. Add three buttons that resembles a tab. The user should be able to navigate through some of the characters in Førstegangstjenesten.

* Ola halvorsen
* Ahre-ketil
* Preben lohrengren


<details><summary>Solution</summary>

```jsx
const Character = ({ name }) => <h1>{ name }</h1>;

const App = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <React.Fragment>
            <button onClick={() => setTabIndex(0)}>Tab 1</button>
            <button onClick={() => setTabIndex(1)}>Tab 2</button>
            <button onClick={() => setTabIndex(2)}>Tab 3</button>
            {tabIndex === 0 && <Character name="Ola Halvorsen" />}
            {tabIndex === 1 && <Character name="Ahre-ketil" />}
            {tabIndex === 2 && <Character name="Preben Lohrengren" />}
        </React.Fragment>
    )
}
```
</details>

<br>

#### 💎 Create a login and logout page
<br>

Create a login landing page that allow you to press a button in order to "authenticate" to a "secured" page. The authenticated page should have a something that indicates that you are logged in, and a logout button that logs you out.

Structure:

```jsx
const LoginPage = () => {
    return null;
}

const AuthenticatedApp = () => {
  return null;
}


const App = () => {
  return null;
}
```


<details><summary>Solution</summary>


```jsx
const LoginPage = ({ setAuth }) => {
    return <React.Fragment>
      <h1>Not authenticated, please login</h1>
      <button onClick={() => setAuth(true)}>Login</button>
    </React.Fragment>
}

const AuthenticatedApp = ({ setAuth }) => {
  return <React.Fragment>
    <h1>I am authenticated</h1>
    <button onClick={() => setAuth(false)}>Logout</button>
    </React.Fragment>
}


const App = () => {
  const [auth, setAuth] = useState(false);

  return <div style={{ display: "flex", justifyContent:"center", alignItems: "center", margin: 10, padding: 10 }}>
    {auth ? <AuthenticatedApp setAuth={setAuth} /> : <LoginPage setAuth={setAuth} />}
  </div>
}
```



</details>

