import useCart from "../../hooks/useCart";
import products from "../../data/products";
import { useNavigate } from "react-router-dom";

export const CartDetails = () => {
  const cart = useCart();
  const nav =useNavigate()

  let sum = cart.products.reduce((sum, item) => { return sum + item.price},0);

  return (
    <div>
      <div>
        {cart.products.map((item) => {
          return (
            <div key={item.id}>
              {item.title} - {item.price}pln <button onClick={() => cart.removeProductFromCart(item)}> X </button>
            </div>
          );
        })}
      </div>
      {sum}pln
      
      <button onClick={()=> nav("/shipment")} 
    >Submit</button>
    </div>
  );
};
