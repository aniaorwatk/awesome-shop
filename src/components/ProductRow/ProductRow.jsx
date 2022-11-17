
import useCart from "../../hooks/useCart";
import { CartIcon } from "./../CartIcon";
import "./ProductRow.css";
import { Link } from "react-router-dom";

const ProductRow = ({ product }) => {
  let cart = useCart();

 
  return (
    <div className="product">

      <Link to={`/products/${product.id}`}>
      
      <img className="product__thumbnail" src={product.thumbnail} />
      </Link>
      
      {product.title} - {product.price}pln
      <CartIcon
        onClick={() => {cart.addProductFromCart(product)}}
      />
      {product.category}
    </div>
  );
};

export default ProductRow;
