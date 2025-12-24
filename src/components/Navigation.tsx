import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-700 rounded-lg">
              <span className="text-yellow-400 font-bold text-xl">RF</span>
            </div>
            <div className="flex flex-col">
              <span className="text-blue-900 font-bold text-xl leading-none">RF ASSOCIATES</span>
              <span className="text-gray-600 text-xs">Building Excellence</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 hover:text-blue-900 transition-colors duration-200 font-medium relative group ${
                  location.pathname === link.path ? 'text-blue-900' : ''
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-yellow-400 transform transition-transform duration-200 ${
                    location.pathname === link.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Get a Quote
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-blue-900 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 px-4 rounded-lg transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'bg-blue-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-yellow-400 text-blue-900 px-4 py-3 rounded-lg font-semibold text-center hover:bg-yellow-500 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
