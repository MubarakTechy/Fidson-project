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
        <span className="text-lg font-medium">{question}</span>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p>{answer}</p>
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
      question: "Q: I can’t find my preferred laptop specifications. What should I do?",
      answer:
        "Ans: No worries! Click this link https://wa.link/ovw9rr to discuss your specific laptop requirements with us.",
    },
  ];

  return (
    <>
    <Navbar />
        <div className="p-20">
            <div className="max-w-3xl mx-auto py-12 px-4">
                <h1 className="text-3xl font-bold text-[#0481EC] mb-8 text-center">
                    Frequently Asked Questions
                </h1>
                <div className=" p-2 gap-3 ">
                    {faqData.map((faq, index) => (
                    <FAQItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                    />
                    ))}
                </div>
            </div>
            <div className="flex items-center " >
                <div className="flex flex-col ">
                     <h1 className="text-[30px] font-bold text-[#0481EC] mb-8">If you have a different question.</h1>
                    <div>
                        <h1 className="font-bold text-[20px]">You can reach out to us through email, we are always available.</h1>
                        <span className='flex items-center gap-1 '>
                            <MdEmail className='text-[#0481EC]' size={20} /> 
                            <h1 className='font-mono  text-[17px]'>info@1691techsolution.com</h1>
                        </span>
                        <h1 className="font-bold text-[#0481EC] ug   text-[35px]">or Send us a Direct Message on WhatsApp</h1>
                        <a href='https://wa.me/message/MBU45KTNZGT6O1' className='flex items-center gap-1 '>
                            <FaPhone className='text-[#0481EC]' size={20} /> 
                            <h1 className='font-mono  text-[17px]'>+234 806 162 2596 </h1>
                        </a>
                    </div>
               </div>
               <div>
                <Image
                  className=' w-[45vw] max-sm:w-[30vw]'
                  src={Max2.src}
                  alt="Max profile"  width={300} height={500} priority />
               </div>
            </div>
        </div>
        <Footer />
    </>
  );
};

export default Page;