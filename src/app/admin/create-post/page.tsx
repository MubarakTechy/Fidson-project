"use client";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useUser } from "../../../../context/UserContext";
import axios from "axios";

const Page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
    formdata.append("title", title);
    formdata.append("content", content);
    if (image) formdata.append("image", image);

    const res = await axios.post(
      "https://one691techsolutions.onrender.com/api/post",
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
      console.log(res.data);

      setInterval(() => {
        window.location.reload();
      }, 2000);
    } else {
      toast.error(res.data);
      console.log(res.data);

      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-[#0481EC]">Create Post</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="file"
          placeholder="Upload post image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <textarea
          placeholder="Content"
          className="w-full border p-2 rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-[#0481EC] text-white px-4 py-2 rounded hover:bg-[#0369c5]"
        >
          {loading ? "Submitting...." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Page;
