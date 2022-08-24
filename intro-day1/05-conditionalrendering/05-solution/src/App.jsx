import React, { useState } from "react";

//Solution 1

const Text = () => <p>This is my special text</p>

const Solution1 = () => {
    const [toggleText, setToggleText] = useState(false);

    return (
        <React.Fragment>
            <button onClick={() => setToggleText(!toggleText)}>Toggle text</button>
            {toggleText && <Text />}
        </React.Fragment>
    )
}

// Solution 2

const Character = ({ name }) => <h1>{ name }</h1>;

const Solution2 = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <React.Fragment>
            <button onClick={() => setTabIndex(0)}>Tab 1</button>
            <button onClick={() => setTabIndex(1)}>Tab 2</button>
            <button onClick={() => setTabIndex(2)}>Tab 3</button>
            {tabIndex === 0 && <Character name="Ola Halvorsen" />}
            {tabIndex === 1 && <Character name="Ahre-ketil" />}
            {tabIndex === 2 && <Character name="Preben Lohrengren" />}
        </React.Fragment>
    )
}

// Solution 3

const LoginPage = ({ setAuth }) => {
    return <React.Fragment>
      <h1>Not authenticated, please login</h1>
      <button onClick={() => setAuth(true)}>Login</button>
    </React.Fragment>
}

const AuthenticatedApp = ({ setAuth }) => {
  return <React.Fragment>
    <h1>I am authenticated</h1>
    <button onClick={() => setAuth(false)}>Logout</button>
    </React.Fragment>
}


const Solution3 = () => {
  const [auth, setAuth] = useState(false);

  return <div style={{ display: "flex", flexDirection: "column", justifyContent:"center", alignItems: "center", margin: 10, padding: 10 }}>
    { auth ? <AuthenticatedApp setAuth={setAuth} /> : <LoginPage setAuth={setAuth} /> }
  </div>
}

const Combined = () => {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Solution1 />
        <Solution2 />
        <Solution3 />
    </div>
}

export default Combined;
