import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold">Devpla</a>
        </Link>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Links - Hidden on mobile and shown on larger screens */}
        <div className="hidden md:flex space-x-4">
          <Link href="/about" legacyBehavior>
            <a>About us</a>
          </Link>
          <Link href="/signup" legacyBehavior>
            <a>Signup</a>
          </Link>
          <Link href="/login" legacyBehavior>
            <a>Login</a>
          </Link>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 mt-2">
            <Link href="/about" legacyBehavior>
              <a className="block py-2 px-4 text-center bg-gray-700 rounded">About us</a>
            </Link>
            <Link href="/signup" legacyBehavior>
              <a className="block py-2 px-4 text-center bg-gray-700 rounded">Signup</a>
            </Link>
            <Link href="/login" legacyBehavior>
              <a className="block py-2 px-4 text-center bg-gray-700 rounded">Login</a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
