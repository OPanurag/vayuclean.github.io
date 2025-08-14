import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex space-x-6">
      <Link to="/" className="hover:text-gray-200">Home</Link>
      <Link to="/about" className="hover:text-gray-200">About</Link>
      <Link to="/services" className="hover:text-gray-200">Services</Link>
      <Link to="/contact" className="hover:text-gray-200">Contact</Link>
    </nav>
  );
}
