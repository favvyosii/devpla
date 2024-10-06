import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter
import { createDeveloperProfile } from '../utils/api';
import { toast } from 'react-hot-toast';
import Navbar from '../components/Navbar';
const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    portfolio_website: '',
    github: '',
    linkedin: '',
    technologies: '',
    niche: '',
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
      const response = await createDeveloperProfile(formData);
      toast.success('Profile created successfully!');
      // Redirect to dashboard after successful signup
      router.push('/dashboard'); // Redirect to dashboard
    } catch (error) {
      console.error('Error creating profile:', error.response);
      toast.error('Failed to create profile');
    }
  };

  return (
    <>
    
    <Navbar/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    name="name"
    value={formData.name}
    onChange={handleChange}
    placeholder="Name"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Email"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <input
    type="tel"
    name="phone"
    value={formData.phone}
    onChange={handleChange}
    placeholder="Phone"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="text"
    name="country"
    value={formData.country}
    onChange={handleChange}
    placeholder="Country"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="url"
    name="portfolio_website"
    value={formData.portfolio_website}
    onChange={handleChange}
    placeholder="Portfolio Website"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="url"
    name="github"
    value={formData.github}
    onChange={handleChange}
    placeholder="GitHub"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="url"
    name="linkedin"
    value={formData.linkedin}
    onChange={handleChange}
    placeholder="LinkedIn"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="text"
    name="technologies"
    value={formData.technologies}
    onChange={handleChange}
    placeholder="Technologies"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="text"
    name="niche"
    value={formData.niche}
    onChange={handleChange}
    placeholder="Niche"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
  />
  <input
    type="password"
    name="password"
    value={formData.password}
    onChange={handleChange}
    placeholder="Password"
    className="w-full p-2 border border-gray-300 rounded text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
  />
  <button
    type="submit"
    className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
  >
    Sign Up
  </button>
</form>

      </div>
    </div>
    </>
  );
};

export default Signup;
