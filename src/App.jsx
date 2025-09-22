import './App.css'
import ItemCount from './components/ItemCount'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Racing from './components/Racing';
import { CartProvider } from './context/CartContext';
import CartContainer from './components/CartContainer';

function App() {

  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer mensaje = "Ferrari"/>}/>
      <Route path='/categories/:category' element={<ItemListContainer mensaje = ""/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      <Route path="/categories/racing" element={<Racing />} />
      <Route path='/cart' element={<CartContainer/>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
  )
}

export default App
