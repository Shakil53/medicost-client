import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mr-96 mr-10 md:mr-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink to="/"><Button variant='link' className="text-slate-700 px-3 py-2 rounded-md text-md font-semibold">Home</Button></NavLink>
                <NavLink to="/compare-price" className=" "><Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Compare</Button></NavLink>
                <NavLink to="/consultant" className=" "><Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Consultant</Button></NavLink>
               
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out">
              {/* Hamburger menu icon */}
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <ul className="space-y-2">
            <li>
              <NavLink to="/home" activeClassName="bg-gray-900 text-white" className="block px-3 py-2 rounded-md text-base font-medium text-white">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="bg-gray-900 text-white" className="block px-3 py-2 rounded-md text-base font-medium text-white">About</NavLink>
            </li>
            {/* Add more NavLink components for other routes */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
