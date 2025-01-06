import React from "react";

const AddToCart = (props) => {
  const handleClick = () => {
    if (props.cart.includes(props.item)) {
      props.setWarning(true);
      setTimeout(() => {
        props.setWarning(false);
      }, 2000);
      return;
    }
    props.setCart([...props.cart, props.item]);
  };

  return (
    <button onClick={handleClick}>
      Add to Cart
    </button>
  );
};

export default AddToCart;