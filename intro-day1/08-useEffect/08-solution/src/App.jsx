import React, { useEffect, useState} from 'react';

const App = () => {
    const [random, setRandom] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setRandom(Math.random())
        }, 3000);
      });

    useEffect(() => {
        alert("Welcome to the application")
    }, [])

    useEffect(() => {
        document.title = `You clicked ${count} times`;
      }, [count]);
    
    return (
        <div>
            <p>Number: {random}</p>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    )
}

export default App;