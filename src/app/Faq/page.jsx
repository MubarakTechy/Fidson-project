'use client'
import React, { useState } from "react";
import Navbar from '../../component/Navbar';
import { MdEmail } from "react-icons/md";
import Footer from '../../component/Footer';
import { FaPhone } from "react-icons/fa6";
import Image from 'next/image';
import Max2 from '../../image/Saly-37.png';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        className="w-full text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg sm:text-xl font-medium">{question}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p className="text-base sm:text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

const Page = () => {
  const faqData = [
    {
      question: "Q: Is it safe to buy from 1691 Tech Solution?",
      answer:
        "Ans: Yes, it is 100% safe to buy from us. We are a trusted company, and we offer only high-quality products and services.",
    },
    {
      question: "Q: How do I receive my ordered products?",
      answer:
        "Ans: Once your order is placed, we immediately begin processing it for delivery. You can pick up your order in person from our office at No. 3, Sokoto Road, Sabo-Oke, Ilorin, or we can deliver it to you through our trusted logistics partners.",
    },
    {
      question: "Q: How can I contact you for complaints or inquiries?",
      answer:
        "Ans: You can always reach out to us through our contact details, and we will be happy to assist you. You can also visit our office at No. 3, Sokoto Road, Sabo-Oke, Ilorin.",
    },
    {
      question: "Q: Where is 1691 Tech Solution located?",
      answer:
        "Ans: We are currently based in Ilorin, Kwara State, Nigeria.",
    },
    {
      question: "Q: I can't find my preferred laptop specifications. What should I do?",
      answer:
        "Ans: No worries! Click this link https://wa.link/ovw9rr to discuss your specific laptop requirements with us.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0481EC] mb-8 text-center">
            Frequently Asked Questions
          </h1>
          <div className="bg-white rounded-lg shadow-md p-6">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-xl sm:text-2xl font-bold text-[#0481EC]">
              If you have a different question
            </h2>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                You can reach out to us through email, we are always available.
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <MdEmail className="text-[#0481EC]" size={24} /> 
                <a 
                  href="mailto:info@1691techsolution.com" 
                  className="text-base sm:text-lg hover:underline"
                >
                  info@1691techsolution.com
                </a>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold text-[#0481EC] mb-4">
                Or Send us a Direct Message on WhatsApp
              </h3>
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#0481EC]" size={24} /> 
                <a 
                  href="https://wa.me/message/MBU45KTNZGT6O1" 
                  className="text-base sm:text-lg hover:underline"
                >
                  +234 806 162 2596
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <Image
              className="w-full max-w-md"
              src={Max2.src}
              alt="1691 Tech Solution"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;