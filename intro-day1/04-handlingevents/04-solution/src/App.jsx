import React, { useState } from "react";

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
            style={{width: 250, height: 250, backgroundColor, border: "1px solid black"}}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            />
            <h1>My count: {count}</h1>
            <button onClick={increment}>Increment by 1</button>
            <button onClick={decrement}>Decrement by 1</button>
        </React.Fragment>
    )
  }

  export default App;
