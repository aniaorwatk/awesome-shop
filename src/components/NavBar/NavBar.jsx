import { CartIcon } from "../CartIcon.jsx"
import "./NavBar.css"
import Search from "./Search.jsx"

export function NavBar({searchValue,setSearchValue}){
    return(
        <header>
            <h1>Awesome Shop</h1>
            <Search 
            searchValue={searchValue} 
            setSearchValue={setSearchValue}/>

            <CartIcon />
        </header>
    )
}