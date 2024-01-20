import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import CartView from "../components/CartView/CartView";
import Checkout from "../components/Checkout/Checkout";
import LoginScreen from "../components/LoginScreen/LoginScreen";


const AppRouter = () => {
    const { user } = useContext(UserContext);

    return (

        <BrowserRouter>
            <NavBar />
            
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/libros/:categoriaId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartView />} />
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/checkout" element={<Checkout />} /> 
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;

