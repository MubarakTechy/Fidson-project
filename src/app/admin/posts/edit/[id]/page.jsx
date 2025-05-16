"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../../../../../context/UserContext";

const EditPostPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const { user } = useUser();
  const token = user?.token;

  const [post, setPost] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
   const fetchPost = async () => {
      try {
        const res = await axios.get(
          `https://one691techsolutions.onrender.com/api/post/${id}`
        );
        setPost(res.data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPost();
    }

    if (id) fetchPost();
  }, [id]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("Not authorized. Please log in.");
      return;
    }

    try {
      await axios.patch(
        `https://one691techsolutions.onrender.com/api/post/${id}`,
        post,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("Post updated successfully");
      setTimeout(() => {
        router.push("/admin/posts");
      }, 2000);
    } catch (error) {
      toast.error("Failed to update post.");
      console.error(error);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow rounded">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-[#0481EC] mb-4">Edit Post</h1>

      <form onSubmit={handleSubmit}>
        <label className="block mb-2 font-medium">Post Title</label>
        <input
          type="text"
          name="title"
          value={post.title}
          onChange={handleChange}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <label className="block mb-2 font-medium">Content</label>
        <textarea
          name="content"
          value={post.content}
          onChange={handleChange}
          rows={5}
          className="w-full mb-4 px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPostPage;
