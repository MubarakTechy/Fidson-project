"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useUser } from "../../../../context/UserContext";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const { user } = useUser();
  const token = user?.token;
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
        // console.log(res.data);
        setPosts(res.data);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-[#0481EC]">All Posts</h1>
      <div className="grid gap-4">
        {posts.map((post: any) => (
          <div key={post.id} className="bg-white p-4 rounded shadow">
            <div className="flex justify-center">
              <img src={post.image} />
            </div>
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
