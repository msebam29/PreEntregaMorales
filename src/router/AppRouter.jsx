import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListConteiner from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import CartView from "../components/CartView/CartView";
import Checkout from "../components/Checkout/Checkout";
import LoginScreen from "../components/LoginScreen/LoginScreen";


const AppRouter = () => {
    const { user } = useContext (UserContext);

    return(

        <BrowserRouter>
            <NavBar/>    
            <Routes>
                <Route path="/" element={<ItemListConteiner />} />
                <Route path="/libros/:categoriaId" element={<ItemListConteiner />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<CartView/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/login" element={<LoginScreen/>} />
            </Routes>       
        </BrowserRouter>  
    )
}

export default AppRouter;

