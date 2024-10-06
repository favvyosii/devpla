import { FaGithub, FaLinkedin } from 'react-icons/fa';

const DeveloperCard = ({ developer }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-md w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto">
      <h2 className="text-xl font-bold text-black">{developer.name}</h2>
      <p className="text-black">Country: {developer.country}</p>
      <p className="text-black">Niche: {developer.niche}</p>
      <p className="text-black">Technologies: {developer.technologies}</p>
      <a href={`mailto:${developer.email}`} className="text-black">Email: {developer.email}</a>
      <div className="flex space-x-4 mt-4">
        <a href={developer.github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-800 text-2xl hover:text-black transition duration-200" />
        </a>
        <a href={developer.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 text-2xl hover:text-blue-800 transition duration-200" />
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;
// create a clickable email link
