import React, { useState } from 'react';
import InputField from './InputField';
import PaymentMethod from './PaymentMethod';
import Button from './Button';
import './OrderForm.css';

const OrderForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, secondName, email, phone, address, paymentMethod } = formData;

    
    if (!firstName || !secondName || !email || !phone || !address || !paymentMethod) {
      alert('Please fill out all fields!');
      return; 
    }
  
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address!');
      return; 
    }
  
    
    const phoneRegex = /^[0-9]{10}$/;  
    if (!phoneRegex.test(phone)) {
      alert('Please enter a valid phone number!');
      return; 
    }
    setFormData({
      firstName: '',
      secondName: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: '',
    })
  
   
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container" >
      
      <p className="header-message">Please fill out the order form so we can serve you better!</p>
      <form className="order-form"onSubmit={handleSubmit}>
        <h2>Order Information</h2>
        <div className="form-row" >
          <InputField label="First Name" name="firstName" placeholder="Enter your first name"   value={formData.firstName}
            onChange={handleChange}/>
          <InputField label="Second Name" name="secondName" placeholder="Enter your second name"value={formData.secondName}
            onChange={handleChange}  />
        </div>
        <div className="form-row">
          <InputField label="Email" name="email" type="email" placeholder="Enter your email" value={formData.email}
            onChange={handleChange}/>
          <InputField label="Phone Number" name="phone" type="tel" placeholder="Enter your phone number" value={formData.phone}
            onChange={handleChange} />
          
        </div>
       
       <div className="form-row">
       <InputField label="Address" name="address" placeholder="Enter your address" value={formData.address}
            onChange={handleChange}/>
      
       </div>
       
        <PaymentMethod  value={formData.paymentMethod}
          onChange={handleChange} />
        <Button label="Send" />
      </form>
      <p className="footer-message">Thank you for your order! We appreciate your trust in us.</p>
    </div>
  );
};

export default OrderForm;
