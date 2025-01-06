import React from "react";
import Counter from "./Counter/Counter"; 
import "../styles/cart.css";

const Cart = ({ cart, setCart }) => {
  const handleAmountChange = (id, newAmount) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, amount: newAmount } : item
    );
    setCart(updatedCart);
  };
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <article>
      {cart?.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.img} alt="product" />
            <p>{item.title}</p>
          </div>
          <div>
            <Counter
              count={item.amount || 1}
              onCountChange={(newCount) => handleAmountChange(item.id, newCount)}
            />
          </div>
          <div>
            <span>${item.price}</span>
            <button className="remove-btn" onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total price of your cart</span>
        <span>
          Rs-
          {cart.reduce((total, item) => total + item.price * (item.amount || 1), 0)}
        </span>
      </div>
    </article>
  );
};

export default Cart;
