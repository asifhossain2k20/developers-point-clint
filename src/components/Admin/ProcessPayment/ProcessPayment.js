import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51JHB8mDm7rB1WFvZP8m0s7yIYIFauJbbN77zkfk4iruAWSB012ys77VzeqsqzAR4aaxAnR6GxqN7AObv1WnoE6UM008TDKhTiz');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
         <CheckoutForm ></CheckoutForm>
    </Elements>
    );
};

export default ProcessPayment;