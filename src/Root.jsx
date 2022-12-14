import {useState} from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";


export const Root = () => {
    const [searchValue, setSearchValue] = useState("");
    
    return (
        <div>
            <NavBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <Outlet context={{searchValue}}/>
        </div>
    )
}

