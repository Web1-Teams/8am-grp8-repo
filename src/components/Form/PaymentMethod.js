import React from 'react';

const PaymentMethod = ({ value, onChange }) => {
  return (
    <div className="payment-method">
      <label>Payment Method:</label>
      <div className="payment-options">
        <label>
          <input type="radio" name="paymentMethod" value="VISA" checked={value === 'VISA'}
            onChange={onChange} />
          VISA
        </label>
        <label>
          <input type="radio" name="paymentMethod" value="Upon Receipt" checked={value === 'Upon Receipt'}
            onChange={onChange}/>
          Upon Receipt
        </label>
        <label>
          <input type="radio"  name="paymentMethod" value="Reflect" checked={value === 'Reflect'}
            onChange={onChange}/>
          Reflect
        </label>
      </div>
    </div>
  );
};

export default PaymentMethod;
