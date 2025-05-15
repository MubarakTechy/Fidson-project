// app/purchase/[id]/page.jsx
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const PurchasePage = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://one691techsolutions.onrender.com/api/product/single-product/${name}`); 
        const data = await res.json()

        if(res.ok){
          console.log(data);
          setProduct(data)
          
          localStorage.setItem('price', data.price)
          
        }

      } catch (err) {
        console.error('Error fetching product:', err);
      }
    };

    if (name) fetchProduct();
  }, [name]);

  if (!product) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded" />
      <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-600 mt-2">{product.description}</p>
      <p className="mt-3 font-semibold">Price: ${product.price}</p>
      <p className="text-sm mt-1 text-gray-500">Specs: {product.spec}</p>
      <p className="mt-2">
        Availability:{' '}
        <span className={product.availability ? 'text-green-600' : 'text-red-600'}>
          {product.availability ? 'In Stock' : 'Out of Stock'}
        </span>
      </p>
      <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
       <a href={`/payment/${product._id}`}> Proceed to Purchase</a>
      </button>
    </div>
  );
};

export default PurchasePage;
