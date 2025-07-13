import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="w-full bg-slate-800 shadow-md" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
      <div className="flex justify-center space-x-8">
        <Link
          to="/"
          className={`px-6 py-4 text-lg font-medium transition-colors ${
            isActive('/') 
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-white hover:text-amber-200'
          }`}
        >
          Home
        </Link>
        <Link
          to="/work-with-me"
          className={`px-6 py-4 text-lg font-medium transition-colors ${
            isActive('/work-with-me') 
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-white hover:text-amber-200'
          }`}
        >
          Work with me
        </Link>
        <Link
          to="/blog"
          className={`px-6 py-4 text-lg font-medium transition-colors ${
            isActive('/blog') 
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-white hover:text-amber-200'
          }`}
        >
          Blog
        </Link>
        <Link
          to="/about"
          className={`px-6 py-4 text-lg font-medium transition-colors ${
            isActive('/about') 
              ? 'text-amber-400 border-b-2 border-amber-400'
              : 'text-white hover:text-amber-200'
          }`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;