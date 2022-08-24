import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './index.css'

import { persons } from './persons.jsx'

ReactDOM.render(
    <App persons={persons} />,
    document.getElementById('root')
)
