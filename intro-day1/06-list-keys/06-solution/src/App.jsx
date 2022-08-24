import React from 'react';
import Person from './Person';

const App = ({persons}) => {
    return (
        <>
            <p>Persons:</p>
            <ul>
                {persons.map(({ ssn, ...rest }) => (
                    <Person key={ssn} {...rest}  />
                ))}
            </ul>
        </>
    )
}

export default App;