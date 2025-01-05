import React from "react";
import "./Card.css";
import AddToCart from "../AddToCard/AddToCart";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt=""/>
      <div className="card-content">
        <h6>{props.title}</h6>
        <p>{props.description}</p>
      </div>
      <div className="card-footer">
        <span className="price">${props.price}</span>
       <AddToCart   item={props.item} 
        cart={props.cart} 
        setCart={props.setCart} 
        setWarning={props.setWarning}/>
      </div>
     </div>
  );
};
export default Card;