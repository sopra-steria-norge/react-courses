import React from 'react';

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

export default Person;