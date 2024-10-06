import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRouter } from 'next/router'; // Import useRouter
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
const router = useRouter(); // Initialize useRouter

  const handleLogout = () => {
    localStorage.removeItem('user_id'); // Clear user ID
    router.push('/login'); // Redirect to login page
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold">Home</a>
        </Link>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links - Hidden on mobile and shown on larger screens */}
        <div className="hidden md:flex space-x-4">
        {/* <button className="text-white">Logout</button> */}
        <LuLogOut size={24} className="text-white cursor-pointer"   onClick={handleLogout}  />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
             <button onClick={handleLogout} className="text-white">Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
