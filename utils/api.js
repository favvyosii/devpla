import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import Navbar from '@/components/NavbarForUsers';
import withAuth from '../utils/withAuth';
import Preloader from '@/components/Preloader';
import { MdDeleteForever } from "react-icons/md";

const Dashboard = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Simulate getting a user_id from localStorage (replace this with actual auth logic)
    const user_id = localStorage.getItem('user_id') || 1;  // Default to 1 for testing

    // Fetch user's profile using user_id
    axios.get(`http://localhost:5000/profile?user_id=${user_id}`)
      .then((res) => setProfile(res.data))
      .catch((err) => console.error(err));
  }, []);

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
            <p>Email: {profile.email}</p>
            <p>Technologies: {profile.technologies}</p>
            <p>Niche: {profile.niche}</p>
            <p>About: {profile.about}</p>
            <p>Experience: {profile.experience}</p>
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
            <Preloader />
        )}
      </div>
    </div>
  );
};

export default withAuth(Dashboard); 