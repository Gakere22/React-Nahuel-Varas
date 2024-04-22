import React from "react"
import { useState } from 'react'
import './App.css'
import MenuNavegacion from "./Components/NavBar/MenuNavegacion"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer"  
import { ChakraProvider } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NotFound from "./assets/NotFound/NotFound"



function App() {




  const [prodCompra, setProdCompra] = useState([]);

  

    
  

  return (
    <>
    <ChakraProvider>   
      <BrowserRouter>
        <MenuNavegacion></MenuNavegacion>
        <Routes>
          <Route path='/productos/' element={ <ItemListContainer  title='Tienda'/>} > </Route> 
          <Route path='/productos/:productoId' element={<ItemDetailContainer title='Detalle'/>}> </Route>
          <Route path='/categorias/:categoria' element={ <ItemListContainer  title='Categoria'/>} > </Route>               
          <Route path='*' element={<NotFound title='Pagina No encontrada' />} > </Route> 
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
    </>
  )
}

export default App
