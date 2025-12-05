import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [openCartModal, setCartModal] =useState({item:null, category:null})
   const [cartDrawer, setCartDrawer] = useState(false);


  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  
  const removeFromCart = (itemIndex) => {
    setCartItems(prev => prev.filter((_, idx) => idx !== itemIndex));
  };

  const updateCartItem = (index, updatedItem) => {
    setCartItems(prev => prev.map((item,i)=> (i === index? updatedItem : item)))
  }

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, updateCartItem ,openCartModal, setCartModal, cartDrawer, setCartDrawer}}>
      {children}
    </CartContext.Provider>
  );
};