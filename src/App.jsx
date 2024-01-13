import './App.css'
import AppRouter from './router/AppRouter'


function App() {
  
  return (
    <UserProvider>
      <CartProvider>
        <AppRouter/>
      </CartProvider>
    </UserProvider>
  )
}

export default App
