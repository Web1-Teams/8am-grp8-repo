import React from 'react';

const Button = (props) => {
  return (
    <div className="sub-button">
      <button type="submit">{props.label}</button>
    </div>
  );
};
export default Button;


