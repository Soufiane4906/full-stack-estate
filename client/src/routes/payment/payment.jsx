import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './payment.scss';

const Payment = () => {
  const [clientSecret, setClientSecret] = useState('');
  const [paymentError, setPaymentError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { amount } = location.state;

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const { data } = await axios.post('/payment-intent', { amount });
        setClientSecret(data.client_secret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
      }
    };

    createPaymentIntent();
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      console.error('Payment failed:', error.message);
      setPaymentError(error.message);
    } else if (paymentIntent.status === 'succeeded') {
      console.log('Payment succeeded!');
    }
  };

  return (
    <div className="payment-container">
      <form onSubmit={handleSubmit}>
        <h2>Payment</h2>
        <div className="card-element-wrapper">
          <FontAwesomeIcon icon={faCreditCard} className="card-icon" />
          <CardElement />
        </div>
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
        {paymentError && (
          <div className="error-message">
            <FontAwesomeIcon icon={faExclamationTriangle} /> {paymentError}
          </div>
        )}
      </form>
    </div>
  );
};

export default Payment;
