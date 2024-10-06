import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router'; // Import useRouter
import Navbar from '../components/Navbar';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter(); // Initialize useRouter

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      toast.success('Login successful!');
      localStorage.setItem('user_id', response.data.user_id); // Store user ID for further requests
      // Redirect to dashboard after successful login
      router.push('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Error logging in:', error.response.data);
      toast.error('Failed to log in');
    }
  };

  return (
    <>
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
