import { CartIcon } from "../CartIcon.jsx";
import useCart from "../../hooks/useCart";
import  Search  from "../Search"
import { CartContext } from "../CartContext.jsx";
import "./NavBar.css";

 function NavBar({ searchValue, setSearchValue, setPage }) {
let cart = useCart();
  return (
    <header className="header">
      <h1 onClick={()=> setPage('list')}>Awesome Shop</h1>  
      <Search 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <CartIcon  onClick={()=> setPage('cart') }/>
      {cart.products.length}
    </header>
  )
}

export default NavBar