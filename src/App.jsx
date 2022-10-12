import { useState } from "react"
import productsData from "./data/products.js";
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { ProductsList } from "./components/ProductsList/ProductsList.jsx";
import "./App.css";

function App() {
  const {products}= productsData;
  const [searchValue, setSearchValue] =useState("")

  const filtredProdusts =products.filter(product=>{
    product.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
  })
  console.log(products);
  return <div>
    <NavBar searchValue={searchValue} 
    setSearchValue={setSearchValue}/>
    <ProductsList products={products}/>
  </div>;
}

export default App;
