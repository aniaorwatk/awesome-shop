import {CartIcon} from "./../CartIcon";
import "./ProductRow.css"
const ProductRow = ({ product }) => {
  return (
    <div className="product">
      <img className="product__thumbnail" src={product.thumbnail} />
      <p>
        {product.title} - {product.price}pln
      </p>
      <CartIcon />
    </div>
  );
};

export default ProductRow;
