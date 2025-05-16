"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../../../../../context/UserContext";

const EditProductPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
  });

  const { user } = useUser();
  const token = user?.token;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          "https://one691techsolutions.onrender.com/api/product"
        );
        const found = res.data.find((item) => item._id === id);
        if (found) {
          setProduct({
            name: found.name,
            price: found.price,
            description: found.description,
          });
        } else {
          toast.error("Product not found");
        }
      } catch (error) {
        toast.error("Error fetching product");
        console.error(error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Not authorized. Please log in.");
      return;
    }

    try {
      await axios.patch(
        `https://one691techsolutions.onrender.com/api/product/${id}`,
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Product updated successfully");

      setTimeout(() => {
        router.push("/admin/products");
      }, 2000);
    } catch (error) {
      toast.error("Update failed");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-[#0481EC] mb-4">Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Product Name</label>
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <label className="block mb-2 font-medium">Price (₦)</label>
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <label className="block mb-2 font-medium">Description</label>
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          rows={4}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
