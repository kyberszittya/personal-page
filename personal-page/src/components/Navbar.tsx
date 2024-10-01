"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { navLinks } from './navLinks';



// Navbar component
const Navbar: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Manage auth state  

  useEffect(() => {
    // Check if JWT token exists in localStorage
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token); // Set auth state based on token existence
  }, []);

  const handleLogout = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem('token');
    setIsAuthenticated(false); // Update auth state    
  };
  

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex justify-center space-x-8 flex-grow">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-white hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Conditionally show Login or Logout */}
        <div className="flex items-center ml-auto">
        {isAuthenticated ? (            
            <button onClick={handleLogout} className="text-white hover:underline">
              Logout
            </button>          
          ) : (            
              <Link href="/login" className="text-white hover:underline">
                Login
              </Link>            
          )}
        </div>
      </div>

    </nav>
  );
};

export default Navbar;