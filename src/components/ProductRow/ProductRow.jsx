// import { useCart } from "../CartContext";
import useCart from "../../hooks/useCart";
import { CartIcon } from "./../CartIcon";
import "./ProductRow.css";

const ProductRow = ({ product }) => {
  let cart = useCart();
  return (
    <div className="product">
      <img className="product__thumbnail" src={product.thumbnail} />
      {product.title} - {product.price}pln
      <CartIcon
        onClick={() => {cart.addProductFromCart(product)}}
      />
      {product.category}
    </div>
  );
};

export default ProductRow;
