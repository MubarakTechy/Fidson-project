"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useUser } from "../../../../context/UserContext";
import { toast } from "react-toastify";

const Page = () => {
  const [products, setProducts] = useState([]);
  const { user } = useUser();
  const token = user?.token;

  const sortedProducts = products?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

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
        setProducts(res.data);
        console.log(res.data);
        
      }
    };

    fetchProducts();
  }, []);

const deleteProduct = async (id)=>{
  if (!token) {
        toast.error("Not authorized. Please log in.");
        return;
      }
  
      try {
        await axios.delete(
          `https://one691techsolutions.onrender.com/api/product/${id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        toast.success("Product deleted successfully");
  
        setTimeout(() => {
          window.location.reload()
        }, 2000);
      } catch (error) {
        toast.error("Delete failed");
        console.error(error);
      }
}

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#0481EC]">All Products</h1>
      <div className="grid gap-4">
        {sortedProducts?.map((product) => (
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

            {/* Edit and Delete Buttons */}
            <div className="mt-4 flex gap-3">
              <button className="bg-yellow-500 text-white px-4 py-1 rounded">
               <a href={`/admin/products/edit/${product._id}`}> Edit</a>
              </button>
              <button className="bg-red-600 text-white px-4 py-1 rounded" onClick={()=>deleteProduct(product._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
