import { loadStripe } from '@stripe/stripe-js';
import { useCallback } from 'react';
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';

const Payment = (props) => {
  const { total } = props;

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch('/api/checkoutsessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ total })
    });

    const { id } = await response.json();
    return id;
  }, [total]);

  const options = { fetchClientSecret };
  const stripePromise = loadStripe('pk_test_51PYXLtRoF1R8UIs1w2HY2yM5CYbgTe8dvVqcv43Hs5Aq7p26vmop9GpItWsknvXci5f7ZfREn2GFbDeyOtMpSnDl00oEtrRjG1');

  return (
    <div>
      <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
        <EmbeddedCheckout />
      </EmbeddedCheckoutProvider>
      {/* <Link to="/order-confirmation">
      <button>Next</button>
      </Link> */}
    </div>
  );
};

export default Payment;