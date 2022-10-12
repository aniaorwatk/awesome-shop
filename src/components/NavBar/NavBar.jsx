import {CartIcon} from "../CartIcon.jsx";
import Search from "./Search.jsx";
import "./NavBar.css";

const NavBar = ({ searchValue, setSearchValue }) => {
  return (
    <header>
      <h1>Awesome Shop</h1>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <CartIcon />
    </header>
  );
};

export default NavBar;
