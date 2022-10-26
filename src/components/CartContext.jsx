import { createContext, useContext, useState } from "react";


export const CartContext = createContext([]);
export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
    const [items,setCart]= useState([])
    const defaultValue={items,setCart}
  return (
  <CartContext.Provider 
  value={defaultValue}>
    {children}
    </CartContext.Provider>
    );
}
