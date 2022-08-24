# JavaScript concepts used in React
To quickly write and run JavaScript code, type `node` in a terminal window and `.exit` to quit.
```js
$ node
> const hello = "JavaScript"
undefined
> hello
'JavaScript'
> .exit
```


## Arrow functions

Arrow functions are used a lot in React. Let's create a few arrow functions with various inputs. They are typically defined as constant variables, as shown with the function called `func` below.
```js
const func = () => {}
```

<br>

#### 📌 A1 - Create an arrow function that returns `"Hello World!"`
Use the `return` keyword inside the curly brackets `{ }`.

<details><summary>🔑 Solution</summary>

```jsx
const greeting = () => {
    return "Hello World!"
}
```
</details>

<br>

#### 📌 A2 - Create an arrow function without the `return` keyword
The function should have a parameter `name`, and return `Hello <name>!`. Directly write the return value after the arrow `=>`, rather than using curly brackets and a `return` statement.

<details><summary>🔑 Solution</summary>

```jsx
const greeting = (name) => `Hello ${name}`
```
</details>

<br>

#### 💎 A3 - Create an arrow function that returns another arrow function
The function should take a number as input, and return a function that increases a new number by the first amount. See the usage below. You are not allowed to store the returned arrow function in a variable, but must return it directly (write the whole function on a single line).
```js
const addN = (n) => // TODO
const add2 = addN(2)

add2(3) // 5
```

<details><summary>🔑 Solution</summary>

```jsx
const addN = (n) => (m) => n + m
```
</details>



<br><br>

## Destructuring
Destructuring enables unpacking values from arrays and objects, directly into distinct variables. Not all values in the list or object must be destructured, and more than those present can be destructured. If more variables than those present are destructured, these will be `undefined`.
```js
const numbers = [1, 2]
const [one, two] = numbers
one + two // 3
```
```js
const rectangle = {
    width: 5,
    height: 8,
}
const { width, height } = rectangle
width * height // 40
```

When the final value has `...` in front of it, all the values not expliciltly destructured will become a new list or object, and assigned to the rest variable.
```js
const { name, weight, ...rest } = { name: "John", age: 28, height: 193, weight: 83 }
rest // { age: 25, height: 193 }

const [first, second, ...tail] = [1, 2, 3, 4, 5, 6, 7, 8]
tail // [3, 4, 5, 6, 7, 8]
```

<br>

#### 📌 B1 - Create a function that returs the size (area) of a rectangle `{ width: 5, height: 8 }`
JavaScript funcions are able to destructure input argument directly. The `size` function should destructure the rectangle object similarly to how the `sum` function below destructures the list input.
```js
const sum = ([a, b]) => a + b
sum([1, 2]) // 3
````
<details><summary>🔑 Solution</summary>

```jsx
const size = ({ width, height }) => width * height
```
</details>

<br>

#### 📌 B2 - What are the values of `rest`, `number`, `second`?
```js
const { age, height, weight, ...rest } = { name: "John", age: 28, height: 193, weight: 83 }
const [, number] = [1, 2, 3, 4]
const [first, second] = [0]
```

<details><summary>🔑 Solution</summary>

```js
rest: { name: "John" }
number: 2
second: undefined
```
</details>

<br>

#### 💎 B3 - Use destructuring to create two separate functions, returning the first and second element in a list
<details><summary>🔑 Solution</summary>

```js
const first = ([value]) => value
const second = ([, value]) => value
```
</details>


<br><br>

## Spread operator  `...`
The `...` notation is also used to spread the values of a list or an object. It is then essentially the same as writing out all of the values in the list or object.
```js
const numbers = [0, 1, 2]
const sum = (a, b, c) => a + b + c
sum(...numbers) // 3
```
The spread operator can also be used when creating lists or objects.
```js
const rectangle = { width: 4, height: 5 }
const cube = {...rectangle, depth: 3}
cube // { width: 4, height: 5, depth: 3}
```
If an attribute is defined twice within an object. The last one will overwrite the first. Copies can therefore easly be created with the spread operator.
```js
const cube =  { width: 4, height: 5, depth: 3 }
const cube2 = { ...cube } // Exact copy
const cube3 = { ...cube, width: 5 }
cube3 // { width: 5, height: 5, depth: 3}
```
Remember that order matters! `{ width: 5, ...cube }` will first assign `width: 5` to the object, but then later overwrite it with the cube's `width: 4`. In generall, `{ propery: 5, ...object }` and `{ ...object }` are therefore identical when the `object` has a `propery`.

<br>

#### 📌 C1 - Create a function that combines all the attributes from two objects in a single new object
Assume that the two objects don't share any attributes, so that nothing will be overwritten. Note that objects must be wrapped in parentheses if returned directly from an arrow function: `=> ({})`. Otherwise, the compiler will think the object is a function body.
<details><summary>🔑 Solution</summary>

```js
const combine = (a, b) => ({ ...a, ...b })
```
</details>
