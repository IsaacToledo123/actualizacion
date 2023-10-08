import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/Nav'
import './App.css'

import Registro from './components/LadingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav></Nav>
       <Registro></Registro>
    </>
  )
}

export default App
