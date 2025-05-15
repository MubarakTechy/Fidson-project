"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../../../../context/UserContext";

const Page = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useUser();
  const token = user?.token;
  useEffect(() => {
    if (user && !token) {
      window.location.href = "/";
    }
  }, [user, token]);

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

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#0481EC]">Orders</h1>
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
          {orders?.map((order: any) => (
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
  );
};

export default Page;
