import React from "react";
import './Remove.css';
export const removeItemFromList = (list, itemId) => {
  return list.filter(item => item.id !== itemId);
};


export const handleRemove = (cartItems, setCartItems) => (itemId) => {
  setCartItems(removeItemFromList(cartItems, itemId));
};


export const RemoveButton = ({ itemId, onRemove }) => {
  return (
    <button className="remve-btn" onClick={() => onRemove(itemId)} >
      Remove
    </button>
  );
};
