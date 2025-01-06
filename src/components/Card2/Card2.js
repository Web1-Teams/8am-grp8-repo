import React from "react";
import "./Card2.css";


import FormBook from "../booknowform/formbook";

const Card2 = (props) => {
  return (
    <div id={props.category} className="card">
      <img src={props.img} alt=""/>
      <div className="card-content">
        <h6>{props.title}</h6>
        <p>{props.description}</p>
  
      </div>
      <div className="card-footer">
        <span className="price">${props.price}</span>
       <FormBook/>
      </div>
     </div>
  );
};
export default Card2;
