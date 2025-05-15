"use client";

import { useEffect, useState } from "react";
import { useUser } from "../../../../context/UserContext";
import axios from "axios";

const Page = () => {
  const { user } = useUser();
  const token = user?.token;
  // console.log(user);

  useEffect(() => {
    if (user && !token) {
      window.location.href = "/";
    }
  }, [token, user]);

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);

  const slicedOrders = orders.slice(0, 5);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await axios.get(
        "https://one691techsolutions.onrender.com/api/product/purchase/all-purchase"
      );
      //  console.log(res);
      if (res.data) {
        setOrders(res.data.purchases);
      }
    };

    fetchOrders();
  }, []);

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

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        "https://one691techsolutions.onrender.com/api/posts"
      );
      if (res.data) {
        // console.log(res.data);
        setPosts(res.data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md mt-5  mx-auto">
        <h2 className="text-xl font-semibold ">Welcome {user?.name}!</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 text-center mt-6 md:mt-12">
        <div className="bg-blue-700 flex flex-col justify-center items-center text-white h-40 rounded-xl">
          <p className="text-lg">{orders.length}</p>
          <p className="text-xl font-semibold">Total Orders</p>
        </div>
        <div className="bg-blue-700 flex flex-col justify-center items-center text-white h-40 rounded-xl">
          <p className="text-lg">{products.length}</p>
          <p className="text-xl font-semibold">Total Products</p>
        </div>
        <div className="bg-blue-700 flex flex-col justify-center items-center text-white h-40 rounded-xl">
          <p className="text-lg">{posts.length}</p>
          <p className="text-xl font-semibold">Total Posts</p>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-2xl font-bold mb-6"> Recent Orders</h1>
        <table className="w-full bg-white rounded shadow overflow-hidden">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Reference</th>
              <th className="p-3">Phone No.</th>
              <th className="p-3">Total</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {slicedOrders?.map((order: any) => (
              <tr key={order._id} className="border-t">
                <td className="p-3">{order.reference}</td>
                <td className="p-3">{order.phone}</td>
                <td className="p-3">₦{order.total}</td>
                <td className="p-3">{order.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Page;
