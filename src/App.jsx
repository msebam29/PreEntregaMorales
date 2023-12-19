import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListConteiner from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {
  
  return (
    <> 
      <BrowserRouter>
        <NavBar/>    
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/libros/:categoriaId" element={<ItemListConteiner />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
        </Routes>       
      </BrowserRouter>       
    </>
  )
}

export default App
