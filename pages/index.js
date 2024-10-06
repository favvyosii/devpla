// frontend/pages/index.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import DeveloperCard from '../components/DeveloperCard';
import Navbar from '../components/Navbar';

const Home = () => {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/developers')
      .then(res => setDevelopers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Available Developers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {developers.map((dev) => (
            <DeveloperCard key={dev.id} developer={dev} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
