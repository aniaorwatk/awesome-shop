import { createContext, useContext, useState } from "react";


export const CartContext = createContext([]);
export function useCart() {
  return useContext(CartContext);
}

export function CartContextProvider({ children }) {
    const [items,setItems]= useState([])
    const defaultValue={
        items,
        setItems
    }
  return (
  <CartContext.Provider 
  value={defaultValue}>
    {children}
    </CartContext.Provider>
    );
}
