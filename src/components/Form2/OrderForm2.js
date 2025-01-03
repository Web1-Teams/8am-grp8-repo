import React from 'react';
import InputField from './InputField2';
import PaymentMethod from './PaymentMethod2';
import Button from './Button2';
import './OrderForm2.css';

const OrderForm2 = () => {
 

  return (
    <div className="form-container" >
      
      <p className="header-message">Please fill out the order form so we can serve you better!</p>
      <form className="order-form">
        <h2>Order Information</h2>
        <div className="form-row" >
          <InputField label="First Name" name="firstName" placeholder="Enter your first name"   />
          <InputField label="Second Name" name="secondName" placeholder="Enter your second name"  />
        </div>
        <div className="form-row">
          <InputField label="Email" name="email" type="email" placeholder="Enter your email" />
          <InputField label="Phone Number" name="phone" type="tel" placeholder="Enter your phone number"/>
          
        </div>
       
       <div className="form-row">
       <InputField label="Address" name="address" placeholder="Enter your address" />
      
       </div>
       
        <PaymentMethod />
        <Button label="Send" />
      </form>
      <p className="footer-message">Thank you for your order! We appreciate your trust in us.</p>
    </div>
  );
};

export default OrderForm2;