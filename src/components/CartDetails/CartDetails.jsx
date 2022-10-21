import { useCart } from "../CartContext";

export const CartDetails = () => {
  const cart = useCart();

  let sum = cart.items.reduce((sum, item) => { return sum + item.price},0);

  return (
    <div>
      <div>
        {cart.items.map((item) => {
          return (
            <div key={item.id}>
              {item.title} - {item.price}pln
            </div>
          );
        })}
      </div>
      {sum}pln
      <button onClick={()=> console.log("ulalal")}>Submit</button>
    </div>
  );
};
