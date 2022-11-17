import ProductRow from "../ProductRow/ProductRow.jsx";
import "./ProductsList.css"
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useOutletContext } from "react-router-dom";

const ProductsList = () => {

  const {searchValue }= useOutletContext();

  const query = useQuery(["products"], async () => {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products;
  })

  // const cartQuery = useQuery(["carts", 1], async () => {
  //   const response = await fetch('http://localhost:3000/carts/1');
  //   const cart = await response.json();
  //   return cart;
  // })
  if (query.isLoading) {
    return <span>Loading...</span>
  }


  const products = query.data ?? []

  const filteredProducts = products.filter(product => {
    return product.title.toLowerCase().includes(searchValue.toLowerCase());
  })
  console.log(products);
  return (
    <div className="product__list">
      {filteredProducts.map((product) => {
        return <ProductRow product={product} key={product.id} />;
      })}
    
    </div>
  );
};

export default ProductsList;
