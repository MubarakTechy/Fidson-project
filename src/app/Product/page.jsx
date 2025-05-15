"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import { ChevronDown, ChevronUp } from "lucide-react";
import axios from "axios";

const formatPrice = (price, currency = "NGN") => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(price);
};

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="flex flex-col w-full bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="w-full aspect-[4/3] relative">
        <Image
          src={product.image || "/fallback.jpg"} // fallback in case image is missing
          alt={product.name}
          fill
          className="object-contain"
          priority
        />
      </div>
      <h2 className="text-lg font-bold mt-4 line-clamp-2">{product.name}</h2>
      <p className="text-gray-700 text-sm mt-1">{product.specs}</p>
      <p className="text-[#0481EC] font-semibold mt-2">
        {formatPrice(product.price, product.currency)}
      </p>
      <div className="flex justify-between items-center mt-3">
        <span
          className={`text-sm font-medium ${
            product.available ? "text-green-600" : "text-red-600"
          }`}
        >
          {product.available ? "Available" : "Out of Stock"}
        </span>
        <button
          className="flex items-center gap-1 text-sm font-medium text-[#0481EC] cursor-pointer hover:underline"
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          {showDetails ? "Hide Details" : "View Details"}
          {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>
      {showDetails && (
        <div className="mt-4 pt-3 border-t border-gray-200 transition-all duration-300 ease-in-out">
          <p className="text-gray-700 text-sm">{product.details}</p>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://one691techsolutions.onrender.com/api/product"
        );
        if (Array.isArray(res.data)) {
          setProducts(res.data);
        } else {
          console.error("Unexpected API response:", res.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-[#0481EC] text-2xl sm:text-3xl md:text-4xl mb-8 text-center">
            Our Products
          </h1>

          {loading ? (
            <p className="text-gray-500">Loading products...</p>
          ) : products.length === 0 ? (
            <p className="text-red-500">No products found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products?.map((product) => (
                <div
                  key={product._id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="w-full h-48 bg-gray-100 relative">
                    <img
                      src={product.image || "/fallback.jpg"}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-blue-800">
                    <a href={`/purchase/${product.name}`}>  {product.name}</a>
                    </h3>
                    <p className="text-sm text-gray-500">
                      {product.description}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Specs:</span> {product.spec}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-blue-600 font-bold text-base">
                        ₦{product.price.toFixed(2)}
                      </span>
                      <span
                        className={`text-sm px-2 py-1 rounded-full ${
                          product.availability
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {product.availability ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col justify-center items-center gap-4 mt-16 w-full max-w-md">
            <h2 className="font-bold text-xl sm:text-2xl text-center">
              Your preferred specs not here?
            </h2>
            <button
              onClick={() => router.push("/Contactus")}
              className="py-3 px-6 bg-[#0481EC] text-white rounded-lg font-medium w-full sm:max-w-sm hover:bg-[#0369c5] transition-colors duration-300"
            >
              Click here
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
