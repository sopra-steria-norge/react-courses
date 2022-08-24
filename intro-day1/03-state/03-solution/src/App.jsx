import React, { useState } from "react";

const App = () => {
    const [state, setState] = useState(
        {count: 0, name: "Joergen", hasCar: false }
        );

    const [favColors, setFavColors] = useState(
        ["pink","blue", "red"]
        );

    const {
        count,
        name,
        hasCar
    } = state;

    const [ pink, blue, red ] = favColors;

    return (
        <div>
            <div>{count}</div>
            <div>{name}</div>
            <div>{hasCar}</div>
            <ul>
                <li>{pink}</li>
                <li>{blue}</li>
                <li>{red}</li>
            </ul>
        </div> 
    )
}

export default App
