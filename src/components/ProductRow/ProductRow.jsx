import {CartIcon} from "./../CartIcon"
export default function ProductRow({ product }) {

  return (
   
  <div>
     <img src={product.thumbnail}/>
    <p>{product.title} - {product.price}pln</p>
{/* 
    <CartIcon /> */}
    </div>
  );
}
