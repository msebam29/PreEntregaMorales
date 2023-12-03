import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListConteiner from './components/ItemListContainer'


function App() {
  
  return (
    <>  
      <NavBar/>
      <ItemListConteiner greeting="Bienvenidos a Libros Lema"/>  
    </>
  )
}

export default App
