import React from 'react';

const InputField = (props) => {
  return (
    <div className="input-field">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        type={props.type }
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
       
      />
    </div>
  );
};

export default InputField;
