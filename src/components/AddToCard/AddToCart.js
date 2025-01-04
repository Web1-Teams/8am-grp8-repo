import React from "react";

const AddToCart = ({ item, cart, setCart, setWarning }) => {
  const handleClick = () => {
    if (cart.indexOf(item) !== -1) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  };

  return (
    <button onClick={handleClick}>
      Add to Cart
    </button>
  );
};

export default AddToCart;