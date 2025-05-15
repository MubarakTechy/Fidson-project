"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useUser } from "../../../../context/UserContext";

const Page = () => {
  const [products, setProducts] = useState([]);
  const { user } = useUser();
  const token = user?.token;

  useEffect(() => {
    if (user && !token) {
      window.location.href = "/";
    }
  }, [user, token]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get(
        "https://one691techsolutions.onrender.com/api/product"
      );
      if (res.data) {
        // console.log(res.data);
        setProducts(res.data);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#0481EC]">All Products</h1>
      <div className="grid gap-4">
        {products.map((product: any) => (
          <div
            key={product._id}
            className="bg-white p-4 w-[90%] mx-auto rounded shadow"
          >
            <div className="flex justify-center">
              <Image
                src={product.image}
                alt="Product Image"
                width={500}
                height={300}
                className="object-cover w-full h-48 rounded"
              />
            </div>
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-blue-700 text-sm">₦{product.price}</p>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
