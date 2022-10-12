import {CartIcon} from "./../CartIcon";
const ProductRow = ({ product }) => {
  return (
    <div>
      <img src={product.thumbnail} />
      <p>
        {product.title} - {product.price}pln
      </p>
      <CartIcon />
    </div>
  );
};

export default ProductRow;
