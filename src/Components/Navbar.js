import React from 'react';
import { useLocation } from 'react-router-dom';
import cloudLogo from "./cloud.png";
import { Link } from 'react-router-dom';
export default function Navbar() {
  const location= useLocation()
  return (
    <nav className="text-white py-4 px-4 shadow-md" style={{
      background: `linear-gradient(90deg, rgba(15,209,139,1) 0%, rgba(48,219,201,1) 63%, rgba(69,249,252,1) 100%)`
    }}>
      <div className="container mx-auto flex justify-between items-center ">
        <img src={cloudLogo} alt="CloudNotes Logo" className="h-12 w-8 mr-2" />
        {/* Website Name */}
        <h1 className="text-2xl text-black font-extrabold lg:text-4xl lg:mr-[1000px]" >CloudNotes</h1>

        {/* Navigation Links */}
        <div className="space-x-1">
        <Link to='/login'>
            <button className={`${location.pathname==='/login'?"text-black bg-white":""} font-bold px-3 py-2 rounded-md transition bg-black`}
            >
              Login
            </button>
          </Link>
          <Link to='/signup'>
            <button className={`${location.pathname==='/signup'?"text-black bg-white":""} px-3 py-2 rounded-md font-bold transition bg-black`}
            >
              SignUp
            </button>
          </Link>
         
        </div>
      </div>
    </nav>
  );
}
