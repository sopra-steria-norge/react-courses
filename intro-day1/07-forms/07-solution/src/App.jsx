import React, { useState } from 'react';

const App = () => {
    const [formInput, setFormInput] = useState({
        firstName: "",
        lastName: ""
      });
      
      const handleChange = (event) => {
          const name = event.target.name;
          const newValue = event.target.value;
          setFormInput(prevState => ({...prevState, [name]: newValue}))
        };
        
        const handleSubmit = (event) => {
            
            event.preventDefault();
            alert(`Velkommen til førstegangstjenesten rekrutt ${lastName}, ${firstName}`);
        }
        
        
    const { firstName, lastName } = formInput;
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" value={firstName} onChange={handleChange} />
            <input type="text" name="lastName" value={lastName} onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>
    )
}

export default App;


  