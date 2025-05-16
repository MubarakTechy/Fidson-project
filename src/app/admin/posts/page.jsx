"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../../../../context/UserContext";
import Image from 'next/image';
import { toast, ToastContainer } from "react-toastify";


const Page = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useUser();
  const token = user?.token;
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user && !token) {
      window.location.href = "/";
    }
  }, [user, token]);

  useEffect(() => {
    const fetchPosts = async () => {
      
      const res = await axios.get(
        "https://one691techsolutions.onrender.com/api/posts"
      );
      if (res.data) {
        setPosts(res.data);
       
      }
    };

    fetchPosts();
  }, []);

  const deletePost = async (id)=>{
    if (!token) {
      toast.error("Not authorized. Please log in.");
      return;
    }

    try {
      setLoading(true)
      await axios.delete(
        `https://one691techsolutions.onrender.com/api/post/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false)
      toast.success("Product deleted successfully");

      setTimeout(() => {
       window.location.href = "/admin/posts"
      }, 2000);
    } catch (error) {
      toast.error("Delete failed");
      console.error(error);
      setLoading(false)
    }
  }

  const sortedPosts = posts?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#0481EC]">All Posts</h1>
      <ToastContainer />
      <div className="grid gap-4">
        {sortedPosts.map((post) => (
          <div key={post._id} className="bg-white p-4 rounded shadow w-[90%] mx-auto">
            <div className="flex justify-center">
              <Image 
                src={post.image}  
                alt="Post image"
                width={200}
                height={200}
                className="object-cover rounded"
              />
            </div>
            
            <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.content}</p>

            {/* Edit and Delete Buttons */}
            <div className="mt-4 flex gap-3">
              <button className="bg-yellow-500 text-white px-4 py-1 rounded">
                <a href={`/admin/posts/edit/${post._id}`} >Edit</a>
              </button>
              <button className="bg-red-600 text-white px-4 py-1 rounded" onClick={()=>deletePost(post._id)}>
                {loading ? "Deleting...." : "Delete"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
