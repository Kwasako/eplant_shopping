import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import PlantList from './Components/PlantList';
import LandingPage from './Components/LandingPage.jsx';
import CartItems from './Components/CartItems';


const CartItemContext = React.createContext()

function App(){
  const [cartItems, setCartItems] = React.useState([])
  const [showProduct, setShowProduct] = React.useState(false)
  
  function addItemToCart(plant){
    const existingItem = cartItems.find(item => item.id === plant.id)
    if (existingItem){
      setCartItems(prev => prev.map(item =>{
        return item.id === plant.id?
                {...item, quantity: item.quantity += 1}:item
      }))
    } else {
      setCartItems(prev => ([...prev, plant]))
      setCartItems(prev => prev.map(item=>{
        return item.id === plant.id?
                {...item, quantity:1}:item
      }))
    }
  }
  
  function removeItemFromCart(itemId){
    setCartItems(prev => prev.filter(item => item.id !== itemId))
  }
  
  function increaseItemQuantity(itemId){
    setCartItems(prev => prev.map(item =>{
      return item.id === itemId?
              {...item, quantity: item.quantity += 1}: item
    }))
  }
  
  function decreaseItemQuantity(itemId){
    setCartItems(prev => prev.map(item =>{
      return item.id === itemId && item.quantity > 1 ?
              {...item, quantity: item.quantity -= 1}: item
    }))
  }
  
  function clearCart(){
    setCartItems([])
  }
  
  function getStatrted(){
    setShowProduct(true)
  }

  
  return (
    <CartItemContext.Provider value = {
                                        {cartItems, addItemToCart, removeItemFromCart,        increaseItemQuantity, decreaseItemQuantity, clearCart,
                                        getStatrted
                                        }
                                        }
                                        >
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<LandingPage/>}/>
          <Route path = '/plants' element = {<PlantList/>}/>
        </Routes>
      </BrowserRouter>
      <CartItems/>
    </CartItemContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />
  ); 

export { CartItemContext }