import React from "react"
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Menu from './Components/NavBar/menu';

import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Menu> </Menu>
      <ItemListContainer greeting={"Bienvenidos"}></ItemListContainer>
    </div>
    </>
  )
}

export default App
