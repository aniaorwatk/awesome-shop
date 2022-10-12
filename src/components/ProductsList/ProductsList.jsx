import ProductRow from "../ProductRow/ProductRow.jsx";

const ProductsList = ({ products }) => {
  console.log(products);
  return (
    <div>
      {products.map((product) => {
        return <ProductRow product={product} key={product.id} />;
      })}
      lista produktów
    </div>
  );
};

export default ProductsList;
