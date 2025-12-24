import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg">
                <span className="text-yellow-400 font-bold text-xl">RF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-none">RF ASSOCIATES</span>
                <span className="text-gray-400 text-xs">Building Excellence</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional construction solutions for residential, commercial, and renovation projects. Building your vision with precision since day one.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">rfassociates.00@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-yellow-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  123 Construction Ave,<br />Building City, ST 12345
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Stay updated with our latest projects and news.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} RF ASSOCIATES. All rights reserved. Built with precision and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
