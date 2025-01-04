import React from "react";
import "./Card.css";
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
        <button className="btn">Add to Cart</button>
      </div>
     </div>
  );
};
export default Card;