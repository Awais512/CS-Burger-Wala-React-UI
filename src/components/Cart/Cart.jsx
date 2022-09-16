import React from "react";
import CartItems from "./CartItems";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";

const Cart = () => {
  const increment = (item) => {
    console.log("Incremented");
  };
  const decrement = (item) => {
    console.log("Decremented");
  };
  return (
    <section className="cart">
      <main>
        <CartItems
          title={"Cheese Burger"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />
        <CartItems
          title={"Chicken Burger"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItems
          title={"Tower Burger"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />
        <article>
          <div>
            <h4>Subtotal</h4>
            <p>₨{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₨{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₨{200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₨{2000 + 2000 * 0.18 + 2}</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
