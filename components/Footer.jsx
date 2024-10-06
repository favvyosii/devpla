// Footer.js
const Footer = () => {
    return (
<footer className="bg-gray-800 text-white py-6">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <h2 className="text-xl font-bold">DevPla</h2>
        <p className="text-sm mt-1">Your go-to platform for developer profiles.</p>
      </div>
      <div className="flex flex-wrap justify-center md:justify-end space-x-4 mb-4 md:mb-0">
        <a href="/" className="hover:underline">Home</a>
        <a href="/about" className="hover:underline">About</a>
        {/* <a href="#" className="hover:underline">Services</a> */}
        <a href="#" className="hover:underline">Contact</a>
      </div>
    </div>
    <div className="text-center mt-4">
      <p className="text-sm">&copy; {new Date().getFullYear()} DevPla. All rights reserved.</p>
    </div>
  </div>
</footer>

    );
  };
  
  export default Footer;
  