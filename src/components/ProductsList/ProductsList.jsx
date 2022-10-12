import ProductRow from "../ProductRow/ProductRow.jsx";
import "./ProductsList.css"

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div className="product__list">
      {products.map((product) => {
        return <ProductRow product={product} key={product.id} />;
      })}
      lista produktów
    </div>
  );
};

export default ProductsList;
