# Forms

## Controlled components

The way to keep track of the state of a form element in React is by using controlled components. This creates a two way data binding by assigning the value of the input field to be a state value. As well as having a onChange handler on the input field that updates the state value. 

```jsx
const [inputValue, setInputValue] = useState("");

const handleChange = (event) => {
    setInputValue(event.target.value);
  }

return (
    <input type="text" value={inputValue} onChange={handleChange} />
)
```


## Prevent default behaviour

The standard beviour for a HTML form is to browse to a new page when the form is submitted. To avoid this behaviour, the `preventDefault()` method has to be called on the submit event.

```jsx
const handleSubmit = (event) => {
    event.preventDefault();
    alert("The form was submitted.");
  }

return (
    <form onSubmit={handleSubmit}>
        ...
    </form>
)
```

## Multiple controlled components

To avoid creating multiple state variables and event handlers for each form element we use the `useReducer()` hook and generic handleChange method.
`useReducer()` takes a function(called reducer) that determines how React will update your state given the new state.
Notice that each form element needs a `name` property that will be used to determine which state to update.


```jsx
const [formInput, setFormInput] = useState({
    name: "",
    age: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setFormInput(prevState => ({...prevState, [name]: newValue}))
  };

  const { name, age } = formInput;
  return (
      <form>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <input type="number" name="age" value={age} onChange={handleChange} />
      </form>
  )
```
<br><br>

#### 📌 Create a form with two controlled inputs
Combine the above methods to create a form with two controlled inputs: `First name` and `Last Name`. For this exercise you should create a uniqe state and a unique handler for each input element.

<details><summary>Solution</summary>

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

const handleFirstNameChange = (event) => {
  setFirstName(event.target.value)
}

const handleLastNameChange = (event) => {
  setFirstName(event.target.value)
}

return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
    </form>
)
```
</details>
<br><br>


#### 📌 Create a `sumbitHandler()`
Create a `submitHandler()` that alerts the `firstName` and `lastName` when the submit button is pressed. The form should have a button that submits the form and the submit should not send you to a new page.

<details><summary>Solution</summary>

```jsx
const handleSubmit = (event) => {
    event.preventDefault();
    addPerson(firstName, lastName)
  }

return (
    <form onSubmit={handleSubmit}>
      ...
      <input type="submit" value="Submit" />
    </form>
)
```
</details>
<br><br>


#### 💎 Use the same state and handler for all inputs
Try to use only ONE `state` and ONE `eventHandler` to make all input fields controlled.

<details><summary>Solution</summary>

```jsx
const [formInput, setFormInput] = useState({
    name: "",
    age: ""
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const newValue = event.target.value;
    setFormInput(prevState => ({...prevState, [name]: newValue}))
  };

  return(
    <input name="name" value={formInput.name} onChange={handleChange} />
  )
```
</details>



