// frontend/pages/about.js

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-lg text-gray-700">
            It was created by FavlinkSoftware to help devs get hired easily.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
