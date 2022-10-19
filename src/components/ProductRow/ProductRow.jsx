import { CartIcon } from "./../CartIcon";
import "./ProductRow.css";
const ProductRow = ({ product }) => {
  return (
    <div className="product">
      <img 
      className="product__thumbnail" 
      src={product.thumbnail} 
      />
      {product.title} - {product.price}pln
      <CartIcon />
      {product.category}
    </div>
  );
};

export default ProductRow;
