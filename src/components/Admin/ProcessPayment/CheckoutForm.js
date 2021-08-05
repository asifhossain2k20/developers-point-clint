import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import { useState } from 'react';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
   
 // Block native form submission.
   event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      sessionStorage.setItem('paymentId', paymentMethod.id);   
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);   
    }
  };

  return (
      <div className="container">
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe} >
        Pay
      </button>
    </form>
    {
            paymentError && <p style={{color: 'red'}}>{paymentError}</p>
        }
        { 
            paymentSuccess && <p style={{color: 'green'}}>Your payment was successful.</p>
        }
    </div>
  );
};
export default CheckoutForm;
