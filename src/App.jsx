import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/Catalogo/ItemListContainer'
import ItemCount from './components/ItemCount'

function App() {
  
  return (
    <>  
      <NavBar/>
      <ItemListConteiner greeting="Bienvenidos a Libros Lema"/>  
      <ItemCount/>
    </>
  )
}

export default App
