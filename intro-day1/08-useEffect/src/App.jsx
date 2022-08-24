import React, { useEffect, useState} from 'react';

const App = () => {
    const [random, setRandom] = useState(0);

    //This function updates the randomm value every 3 seconds, causing the page to re-render
    useEffect(() => {
        setTimeout(() => {
            setRandom(Math.random())
        }, 3000);
      });

    return (
        <div>
            <p>{random}</p>
        </div>
    )
}

export default App;