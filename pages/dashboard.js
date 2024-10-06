import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { toast } from 'react-hot-toast';
import withAuth from '../utils/withAuth';
import { MdDeleteForever } from "react-icons/md";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    technologies: '',
  });

  useEffect(() => {
    // Fetch user's profile (authentication to be implemented)
    const userId = localStorage.getItem('user_id'); // Get user ID from local storage
    if (userId) {
      axios.get(`http://localhost:5000/profile/${userId}`) // Assuming you have this endpoint
        .then((res) => {
          setProfile(res.data);
          setFormData({
            name: res.data.name,
            email: res.data.email,
            technologies: res.data.technologies,
            country: res.data.country,
            hidden_countries: res.data.hidden_countries.join(', ')
          });
        })
        .catch((err) => console.error(err));
    }
  }, []);
  useEffect(() => {
    const user_id = localStorage.getItem('user_id') || 1;  // Default to 1 for testing

    axios.get(`http://localhost:5000/profile?user_id=${user_id}`)
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));
  }, []);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem('user_id'); // Get user ID from local storage
    try {
      const response = await axios.put(`http://localhost:5000/profile/${userId}`, formData);
      toast.success('Profile updated successfully!');
      setProfile(response.data); // Update local profile state with new data
    } catch (error) {
      console.error('Error updating profile:', error.response.data);
      toast.error('Failed to update profile');
    }
  };
  const handleDeleteProfile = async () => {
    // Simulate getting a user_id from localStorage (replace this with actual auth logic)
    const user_id = localStorage.getItem('user_id') || 1;  // Default to 1 for testing

    try {
      await axios.delete(`http://localhost:5000/profile?user_id=${user_id}`);
      toast.success('Profile deleted successfully!');
      setProfile(null); // Clear the profile from the state after deletion
    } catch (error) {
      console.error('Error deleting profile:', error.response.data);
      toast.error('Failed to delete profile');
    }
  };
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        {profile ? (
          <div>
            <h1 className="text-3xl font-bold">Welcome {profile.name}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
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
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Country"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="text"
                name="hidden_countries"
                value={formData.hidden_countries}
                onChange={handleChange}
                placeholder="Hidden countries (comma separated)"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="technologies"
                value={formData.technologies}
                onChange={handleChange}
                placeholder="Technologies (comma separated)"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
              >
                Update Profile
              </button>
            </form>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
      <div className="container mx-auto p-4">
        {profile ? (
          <div>
            <h1 className="text-3xl font-bold">Welcome {profile.name}</h1>
            <p>Email: {profile.email}</p>
            <p>Technologies: {profile.technologies}</p>
            <p>Niche: {profile.niche}</p>
            <p>About: {profile.about}</p>
            <p>Experience: {profile.experience}</p>
            <p>Github: {profile.github}</p>
            {/* Button to delete profile */}
            {/* <button 
              onClick={handleDeleteProfile}
              className="mt-4 p-2 bg-red-500 text-white rounded"
            >
              Delete Profile
            </button> */}
            <MdDeleteForever size={34} className="text-white cursor-pointer mt-4 p-2 bg-red-500 text-white rounded "   onClick={handleDeleteProfile}  />
            
          </div>
        ) : (
            <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default withAuth(Dashboard);
