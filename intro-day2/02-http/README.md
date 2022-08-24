# HTTP clients and Promises

## HTTP calls and Promises

Lets say that you're about to order something on your favorite online shopping site. You've added all your new items into a shopping basket, and you've checked it out. Your credit card information is pasted into the payment form and the order confirmation has arrived into your mailbox after a series of bank authentication services. That email confirmation is a Promise. The company have **Promised** to deliver your package. it may take a couple of days, or an entire week before your package has arrived.

From the [mozilla developer page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

> The Promise object in javaScript represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Hence the "eventual completion" is you as a customer "waiting" for the package to arrive, and the resulting value of that operation is your actual package.

Lets say we have some sort of external API that gives us some data. That API-call needs to travel for a certain amount of time. The time needed to retreive data often relies on factors such as: internet speed, signal strength and geolocation of servers. By having these factors, the time it takes for a web-application to recieve some data can be from a few milliseconds, to entire seconds.

If it takes an entire week for your package arrives, you're absolutely going to enjoy your life while it travels (i.e. buying an item online is an asynchronous request, you do not get the item immediately). The same applies to the web-application; the application want to continue living its life uninterrupted.

Below is a Promise, and it's an object.

```jsx
Promise((resolve, reject) => {
    /*
    resolve() return the data / item you want to deliver, if it succeeds (the result)
    reject() return information about something you want to deliver, if it goes wrong
    */
})
```

The Promise have two important functions. These are `resolve` and `reject`. To emphazise how these functions work, I will re-create the `fetch` http-client from javaScript with pseudo-code.

```jsx
const fetch = (url, params) => new Promise((resolve, reject) => {
    // use some method to get data from the given url
    // wait for all of that data to arrive, sequentially.
    // resolve the payload
    if(/* If we did not get any errors while getting the data*/)
        // resolve the payload.
        resolve(payload);
    }

    // if there is some kind of error from the http-request
    // call the reject function to "reject" the Promise. Your promise did not hold.
    reject(new Error());
})
```

Lets say we have some javaScript code that fetch some data. How are we going to retreieve that data? Our initial execute with `fetch()` is a function that returns a Promise that will eventually complete.

```jsx
const url = "example.com";

const promise = fetch(url);

// continue program
```

Let us think about the `reject` and `resolve` function. Remember: the Promise will eventually complete. Lets introduce the concept functional programming, and adding a  `then(() => {})`
to our Promise. We can now access the resolved values from the Promise, without blocking our code!

```jsx

const promise = fetch(url);

promise.then(res => {
        // do something with our responses, maybe use a setState function?
    });

// or chaining directly

fetch(url).then(res => {
    // do something with the response
})
```

How can this look like in React? Let us add a useEffect on a component to retreieve data on load.

```jsx
const App = () => {

    const [state, setState] = useState(null);

    useEffect(() => {
        // executing the function, immediately returns a Promise
        fetch("example.com")
            .then(res => res.json()) // adding a .then(), that executes when the Promise has resolved
            .then(data => setState(data)) // retrieveing data when res.json() has resolved, and setting data with setData;
    },[])

    return <div> {/* your data display */}</div>
}
```

