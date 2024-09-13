import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    securityCode: ''
  });

  const navigate = useNavigate();

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate a payment process and redirect to thank you page
    navigate('/thank-you');
  };

  return (
    <div>
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            <input
              type="radio"
              value="cash"
              checked={paymentMethod === 'cash'}
              onChange={handlePaymentMethodChange}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              value="card"
              checked={paymentMethod === 'card'}
              onChange={handlePaymentMethodChange}
            />
            Card
          </label>
        </div>

        {paymentMethod === 'card' && (
          <div>
            <div>
              <label>
                Card Number:
                <input
                  type="text"
                  name="cardNumber"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9123 4567"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Expiry Date:
                <input
                  type="text"
                  name="expiryDate"
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Security Code:
                <input
                  type="text"
                  name="securityCode"
                  value={cardDetails.securityCode}
                  onChange={handleInputChange}
                  placeholder="123"
                  required
                />
              </label>
            </div>
          </div>
        )}

        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default PaymentPage;