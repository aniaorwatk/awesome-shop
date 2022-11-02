import { useQuery,useMutation } from "@tanstack/react-query";
import {queryClient} from "../App.js"

const useCart = () => {
  const query = useQuery(["carts", 1], async () => {
    const response = await fetch("http://localhost:3000/carts/1");
    const cart = await response.json();
    return cart;
  });
  const mutation = useMutation(
    async (cart) => {
      const response = await fetch("http://localhost:3000/carts/1", {
        method: "PATCH",
        body: JSON.stringify(cart),
        headers: {
          "Content-Type": "application/json",
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["carts", 1]);
      },
    }
  );

  const removeProductFromCart = (removeProduct) => {
    mutation.mutate({
        products: query.data.products.filter(product => product.id !== removeProduct )
      });

  };

  const addProductFromCart = (product) => {
    mutation.mutate({
      products: [...query.data.products, product],
    });
  };

  if (query.isLoading) {
    return { products: [], removeProductFromCart, addProductFromCart };
  }

  return {
    products: query.data.products,
    removeProductFromCart,
    addProductFromCart,
  };
};

export default useCart;