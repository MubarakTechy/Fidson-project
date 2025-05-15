"use client";

import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "../../../../context/UserContext";
import axios from "axios";

const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [spec, setSpec] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const { user } = useUser();
  const token = user?.token;
  // console.log(token);
  useEffect(() => {
    if (user && !token) {
      window.location.href = "/";
    }
  }, [user, token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("description", description);
    formdata.append("spec", spec);
    if (image) formdata.append("image", image);

    const res = await axios.post(
      "https://one691techsolutions.onrender.com/api/product/create",
      formdata,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data) {
      toast.success(res.data.message);
      setLoading(false);
      setInterval(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error(res.data);
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-[#0481EC]">Create Product</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Product Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          className="w-full border p-2 rounded"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Specifications"
          className="w-full border p-2 rounded"
          value={spec}
          onChange={(e) => setSpec(e.target.value)}
          required
        />
        <input
          type="file"
          placeholder="Upload product image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <textarea
          placeholder="Description"
          className="w-full border p-2 rounded h-32"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#0481EC] text-white px-4 py-2 rounded hover:bg-[#0369c5]"
        >
          {loading ? "Submitting....." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
