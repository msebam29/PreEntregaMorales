import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListConteiner from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";


const AppRouter = () => {
    const { user } = useContext (UserContext);

    return(
        <BrowserRouter>
            <NavBar/>    
            <Routes>
                <Route path="/" element={<ItemListConteiner />} />
                <Route path="/libros/:categoriaId" element={<ItemListConteiner />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
            </Routes>       
        </BrowserRouter>  
    )
}

export default AppRouter;

