'use client';

import { useState } from 'react';
import Script from 'next/script';
import { useParams } from 'next/navigation';
import { toast, ToastContainer } from 'react-toastify';

const PayForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);
  const [paystackReady, setPaystackReady] = useState(false);
  const { id: productId } = useParams();

  const handlePayment = (e) => {
    e.preventDefault();

    const price = localStorage.getItem('price');
    if (!price || isNaN(price)) {
      toast.error('Invalid or missing price. Please try again.')
      return;
    }

    const amount = parseInt(price) * 100;

    if (!email || !phone) {
      toast.error('Please fill in all fields')
      return;
    }

    if (!window.PaystackPop) {
      toast.error('Paystack is not loaded yet. Please wait or refresh.')
      return;
    }

    const handler = window.PaystackPop.setup({
      key: 'pk_test_f7fd4dba18436a90b7ebde95b7b7b435e3a539a9', // ✅ Replace with your live key in production
      email,
      amount,
      currency: 'NGN',
      ref: '' + Math.floor(Math.random() * 1000000000 + 1),

      callback: function (response) {
        setLoading(true);

        fetch('https://one691techsolutions.onrender.com/api/product/purchase', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            reference: response.reference,
            email,
            phone,
            productId,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            setLoading(false);
            if (data.purchase) {
             toast.success("Payment successful!")
             setInterval(()=>{
              window.location.href = '/products'
             }, 3000)
              // optionally redirect
            } else {
             toast.error('Payment verification failed.')
            }
          })
          .catch((err) => {
            setLoading(false);
            toast.error('Error verifying payment.')
            console.error(err);
          });
      },

      onClose: function () {
        toast.error('Transaction cancelled')
      },
    });

    handler.openIframe();
  };

  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="afterInteractive"
        onLoad={() => setPaystackReady(true)}
        onError={() => alert('Failed to load Paystack script')}
      />

      <form onSubmit={handlePayment} className="max-w-md p-4 bg-white shadow rounded mx-auto mt-8">
        <h2 className="text-xl font-bold mb-4">Buy Product</h2>

        <ToastContainer />

        <label className="block mb-2">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mt-1 rounded"
            required
          />
        </label>

        <label className="block mb-4">
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 mt-1 rounded"
            required
          />
        </label>

        <button
          type="submit"
          disabled={loading || !paystackReady}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Processing...' : paystackReady ? 'Pay Now' : 'Loading...'}
        </button>
      </form>
    </>
  );
};

export default PayForm;
