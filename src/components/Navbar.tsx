import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Heart, User, Calendar, Menu } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const user = useSelector((state: RootState) => state.user.currentUser);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Heart className="h-8 w-8 text-red-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">BloodSphere</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/donate" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md">
              Donate
            </Link>
            <Link to="/requests" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md">
              Requests
            </Link>
            <Link to="/appointments" className="text-gray-700 hover:text-red-500 px-3 py-2 rounded-md">
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-1" />
                Appointments
              </span>
            </Link>
            {user ? (
              <Link to="/profile" className="flex items-center text-gray-700 hover:text-red-500 px-3 py-2 rounded-md">
                <User className="h-5 w-5 mr-1" />
                Profile
              </Link>
            ) : (
              <Link to="/login" className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-500 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/donate"
              className="block text-gray-700 hover:text-red-500 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </Link>
            <Link
              to="/requests"
              className="block text-gray-700 hover:text-red-500 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Requests
            </Link>
            <Link
              to="/appointments"
              className="block text-gray-700 hover:text-red-500 px-3 py-2 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-1" />
                Appointments
              </span>
            </Link>
            {user ? (
              <Link
                to="/profile"
                className="block text-gray-700 hover:text-red-500 px-3 py-2 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex items-center">
                  <User className="h-5 w-5 mr-1" />
                  Profile
                </span>
              </Link>
            ) : (
              <Link
                to="/login"
                className="block bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};