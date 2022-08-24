# List and Keys

## JavaScript `map()` function

The `map()` funtion in JavaScript creates a new array with the result of running the provided function on every element in the array.

```js
const numbers = [1,2,3,4,5];
const map = numbers.map(number => number * 10)
// map = [10,20,30,40,50]
```

## Return JSX using `map()`

The `map()` function can be used to return JSX as well. In the example below we use the function to populate the `<ul>` tag with `<li>` elements. The `map()` function has to be included in the JSX using curly braces `{}`.

```jsx
const fruits = [apple, banana, orange, pear, pineapple]

return (
<ul>
    {fruits.map(fruit => <li>{fruit}</li>)}
</ul>
);
```

## Keys

When using the `map()` function to return multiple JSX elements, React requires a unique key to help identify which items have changed, added or been removed.

```jsx
const fruits = [apple, banana, orange, pear, pineapple]

return (
<ul>
    {fruits.map(fruit => (
        <li key={fruit}>{fruit}</li>
    ))}
</ul>
);
```


#### 📌 Create a list of persons using `map()`
Present a list of `<first name> <last name>` for every person in `persons`. Make sure to choose a propper key and try to use destructuring on the person object.

<details><summary>Solution</summary>

```jsx
return (
    <ul>
        {persons.map(({firstName, lastName, ssn}) => (
            <li key={ssn}>{`${firstName} ${lastName}`}</li>
        ))}
    </ul>
)
```
</details>

#### 📌 Add interest to the person list
In addition to the `<first name> <last name>` fields. Add a interest field for each person.

<details><summary>Solution</summary>

```jsx
return (
    <ul>
        {persons.map(({ firstName, lastName, ssn, interests }) => (
        <li key={ssn}>
            <p>{`${firstName} ${lastName}`}</p>
            <ul>
            {interests.map((interest) => (
                <li>{interest}</li>
            ))}
            </ul>
        </li>
        ))}
    </ul>
)
```
</details>

#### 💎 Create a separate `Person` component 
Create a separate `Person` component that represent a single Person. Use the `map()` function to to iterate over the `persons` list and return a single `Person` component for each person.

<details><summary>Solution</summary>

```jsx
return (
    <ul>
      {persons.map(({ ssn, ...rest }) => (
        <Person key={ssn} {...rest}  />
      ))}
    </ul>
  );
}

const Person = ({ firstName, lastName, interests }) => {
  return (
    <li>
      <p>{`${firstName} ${lastName}`}</p>
      <ul>
        {interests.map((interest) => (
          <li>{interest}</li>
        ))}
      </ul>
    </li>
  );
};
```
</details>


