import React from 'react';

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <label>Payment Method:</label>
      <div className="payment-options">
        <label>
          <input type="radio" name="paymentMethod" value="VISA"  />
          VISA
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="Upon Receipt" />
          Upon Receipt
        </label>
        <label>
          <input type="radio"  name="paymentMethod" value="Reflect" />
          Reflect
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;