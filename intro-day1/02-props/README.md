# Component Properties

Untill now, our components have only rendered static content. To make them more dynamic, we can define a funtion parameter `props`. It is an JS object that contains properties of the component. You may use any field names on the `property` object.
```jsx
const Greeting = (props) => <p>Hello { props.name }!</p>
```
With many props, the `props.` notation will quickly become anoying. It is therefore common to destructure the props directly in the function. To use multiple properties, simply write multiple variable names when destructuring. Use `=` when destructuring to set default values.
```jsx
const Greeting = ({ name, smiley="😄" }) => <p>Hello { name }! { smiley }</p>
```

The properties are passed to the compomonent similarly to in HTML. Rembember to use `{ }` if the property type is not a string, so that the value can be JS code.
```html
<Greeting name="React" />
<VerticalSpace height={ 20 } />
```

<br>

JSX elements such as `div` and `h2` also accept certain properties in addition to those in common HTML
* `className` is used to give a component a HTML class
* `style` is used to style the component with css
```html
<h1 className="header" style={ {color: 'red'} }>RED!</h1>
```

<br>

#### 📌 A1 - Fix the `Avatar` component in `App.jsx` so that the App displays the profiles nicely side by side
Destructure the `name` and `imageUrl` properties. Use appropriate `className` values and style in `index.css`. Ideally, the name should be displayed below the profile picture, and be centered.

<details><summary>🔑 Solution</summary>

```jsx
// App.jsx
const Avatar = ({ name, imageUrl }) => {
    return <div className="avatar">
        <img className="profilepic" src={imageUrl} />
        <p className="name">{name}</p>
    </div>
}
```
```css
/* index.css */
.avatar {
    margin: 20px;
    display: inline-block;
    text-align: center;
}

.name {
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
}

.profilepic {
    width: 100px;
    height: auto;
    border-radius: 1000px;
}
```
</details>

<br><br>

#### 💎 A2 - Create a custom component that renders a single image from `picsum.photos`
See https://picsum.photos/ for how you can use the the properties `id`, `width`, `height`, `grayscale`, and `blur`. You do not need to implement them all. `grayscale` and `blur` will be more difficult. Remember to set suiting default values in your component.

Add a few `Picsum` images below the avatars in `App`.

Hint: Use a template string ```<img src={`https://picsum.photos/${width}`} />``` 

<details><summary>🔑 Solution</summary>

```jsx
const Picsum = ({ id=0, width=200, height=150, grayscale=false, blur=0 }) => {
    const params = []
    blur > 0 && params.push(`blur=${blur}`)
    grayscale && params.push('grayscale')
    return <img src={`https://picsum.photos/id/${id}/${width}/${height}?${params.join('&')}`} />
}
```
```html
<Picsum />
<Picsum id={64} width={200} height={100} blur={1} />
<Picsum id={100} width={200} height={200} blur={5} grayscale={true} />
```
</details>
