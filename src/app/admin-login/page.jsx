'use client';
import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';

const page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({success:null, msg:null});
  const { login } = useUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({success:null, msg:null});

    try {
      const response = await fetch('https://one691techsolutions.onrender.com/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      setMessage({
        success:true,
        msg:'✅ Login successful!'
      });

      login({
        name: data.user.name,
        email: data.user.email,
        token: data.token,
      });
    } catch (error) {
      setMessage({
        success:false,
        msg:`❌ ${error.message}`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
      {message && (
          <p className={`${message.success ? "text-green-400" : "text-red-600"} text-center text-sm mt-4`}>{message.msg}</p>
        )}
        <h1 className="text-2xl font-bold mb-6 text-center text-[#0481EC]">Admin Login</h1>
        <p className='text-center'>Please Login To Continue</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0481EC]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0481EC]"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#0481EC] text-white rounded-lg font-semibold hover:bg-[#0369c5] transition-colors duration-300"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        
      </div>
    </main>
  );
};

export default page;
