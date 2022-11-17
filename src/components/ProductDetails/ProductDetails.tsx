import { useQuery } from "@tanstack/react-query"
import React from "react"
import { useParams } from "react-router-dom"
import products from "../../data/products"
import  useCart  from "../../hooks/useCart"
import { CartIcon } from "../CartIcon"



const ProductDetails =()=>{
    
    let cart = useCart();
 const params =useParams()
    const query = useQuery(["products", params.productId], async () => {
        const response = await fetch(`http://localhost:3000/products/${params.productId}`);
        const products = await response.json();
        return products;
      })
// const product = query.data ?? {}

const product = query.data 

if(query.isLoading || !product) return <div>...load</div>
   
    return(
<div className="product">



<img className="product__thumbnail" src={product.thumbnail} />


{product.title} - {product.price}pln
<CartIcon
        onClick={() => {cart.addProductFromCart(product)}}
      />

{product.category}
{product.description}
</div>
    )
}

export default ProductDetails