import { CartIcon } from "../CartIcon.jsx";
import useCart from "../../hooks/useCart";
import  Search  from "../Search"
import { CartContext } from "../CartContext.jsx";
import "./NavBar.css";
import { Link } from "react-router-dom";

 function NavBar({ searchValue, setSearchValue, setPage }) {
let cart = useCart();
  return (
    <header className="header">
      <Link to="/products">
      <h1 >Awesome Shop</h1>  
      </Link>
      
      <Search 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <Link to="/cart">
       <CartIcon   />
      </Link>
     
      {cart.products.length}
    </header>
  )
}

export default NavBar