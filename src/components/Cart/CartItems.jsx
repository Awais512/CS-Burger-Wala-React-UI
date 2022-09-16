import React from "react";

const CartItems = ({ value, title, img, increment, decrement }) => {
  return (
    <div className="cartItems">
      <div>
        <h4>{title}</h4>
        <img src={img} alt={title} />
      </div>
      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default CartItems;
