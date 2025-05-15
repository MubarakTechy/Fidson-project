"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

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
  }, [id]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!post) {
    return <div className="text-center py-20 text-red-500">Post not found.</div>;
  }

  return (
    <>
    <Navbar />
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Link href="/blog" className="text-[#0481EC] mb-4 inline-block hover:underline">
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">{post.title}</h1>

      <div className="w-full h-64 relative mb-6">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
        {post.content}
      </p>
    </div>
    <Footer />
    </>
  );
};

export default SinglePost;
