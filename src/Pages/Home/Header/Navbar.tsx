import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/logo1.svg';
import { motion } from "framer-motion"
import { Button } from '@/components/ui/button';
import { useContext, useState } from 'react';
import { AuthContext } from '@/contexts/AuthProvider/AuthProvider';
import { getAuth, signOut } from 'firebase/auth';
import app from '@/firebase/firebase.config';
import { Link } from 'react-router-dom';


const auth = getAuth(app)

const Navbar: React.FC = () => {
    const {user, loading} = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
  };
  
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        
      })
    .catch(error => console.error(error))
  }
   
    return (
        
           <div className="navbar bg-gradient-to-r from-teal-400 teal-350 to-teal-200">
  <div className="flex-1">
  <motion.div initial={{ x: -150 }} animate={{ x: 0, y: -3, scale: 1.2 }} transition={{ duration: .5, type: 'spring', stiffness: 70 }} className="flex flex-shrink-0 items-center ml-10">
                   <NavLink to='/'> <img
                        className="w-12 sm:ml-4 md:ml-4"
                        src={logo}
                        alt="medicostcompare"
                    /></NavLink>
                </motion.div>
            </div>
         
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden fixed top-20 right-36  bg-gradient-to-tr from-teal-400 teal-350 to-teal-200 p-4 rounded shadow-sm`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          <ul className="space-y-2">
            <li>
            <NavLink to="/" className=" "><Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Home</Button></NavLink>
            </li>
            <li>
            <NavLink to="/compare-price" className=" "><Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Compare</Button></NavLink>
            </li>
            <li>
            <NavLink to="/consultant" className=" "><Button variant='link' className='px-3 py-2 rounded-md text-md font-semibold'>Consultant</Button></NavLink>
            </li>
           
          </ul>
        </div>
      </div>
  <div className="flex-none gap-4 mr-10">
    <div className="form-control mr-auto">
      <input type="text" placeholder="type medicine or generic" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="rounded-full">
                <motion.div initial={{ y: -50 }} animate={{ x: 0, y: -1, scale: 1.2 }} transition={{ duration: .5, type: 'spring', stiffness: 70 }}>
                  
                  <img alt="user photo" src={user?.photoURL}></img> 
                </motion.div>
                
              </div>
          {/* login--------------- */}
              
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li>{
                user?.email ? <Link to='/login' onClick={handleSignOut}>Sign Out</Link> :
                  <Link to='/login'>Sign In</Link>                
            }
              </li>
      </ul>
    </div>
  </div>
</div>

        
    
    );
};

export default Navbar;