import { useCart } from "../CartContext";
import { CartIcon } from "./../CartIcon";
import "./ProductRow.css";
const ProductRow = ({ product }) => {
  let cart = useCart();
  return (
    <div className="product">
      <img className="product__thumbnail" src={product.thumbnail} />
      {product.title} - {product.price}pln
      <CartIcon
        onClick={() => {cart.setCart([...cart.items, product])}}
      />
      {product.category}
    </div>
  );
};

export default ProductRow;
