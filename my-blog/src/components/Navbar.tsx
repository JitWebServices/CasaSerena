import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar: React.FC = () => {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="bg-[#003153]">
      <div className="max-w-5xl mx-auto px-4">
        <ul className="flex justify-center space-x-12 py-4">
          <li>
            <Link
              to="/"
              className={`transition-colors ${
                isActive('/') 
                  ? 'text-yellow-300 font-medium' 
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={`transition-colors ${
                isActive('/work') 
                  ? 'text-yellow-300 font-medium' 
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              Work with me
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className={`transition-colors ${
                isActive('/blog') 
                  ? 'text-yellow-300 font-medium' 
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive('/about') 
                  ? 'text-yellow-300 font-medium' 
                  : 'text-white hover:text-yellow-300'
              }`}
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
