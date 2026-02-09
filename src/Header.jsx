import React from "react";
import {Link} from "react-router-dom";
import { useState } from "react";



const Header = () => {
    const [isopen, setIsOpen] = useState(false) 

    return(
        <>
        <div className="px-30 py-10  bg-gray-100 ">
            <header className="h-18 bg-gray-100 flex justify-between items-center">
                <div className="bg-gray-500 text-white text-center px-10 h-18 border border-orange-500 ">
                    <p className="font-bold text-2xl">MCR</p>
                    <p>consturction</p>
                </div>
                <div className=" hidden md:flex">
                    <ul className=" flex items-center text-white h-18">
                    <li className="list-none px-10 h-full flex items-center justify-between bg-gray-500 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500 hover:border-t border-orange-500"><Link to="/services">Services</Link></li>
                    <li className="list-none px-10 h-full flex items-center justify-between bg-gray-500 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500"><Link to="/projects">Projects</Link></li>
                    <li className="list-none px-10 h-full flex items-center justify-between bg-gray-500 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500"><Link to="/about">About Us</Link></li>
                    <li className="list-none px-10 h-full flex items-center justify-between bg-gray-500 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500"><Link to="/career">Careers</Link></li>
                    <button className="ml-1 px-15 h-18 bg-orange-500 text-black hover:bg-black hover:text-orange-500">Call Now!</button>
                    </ul>
                </div>
                {!isopen && (
    <button className="md:hidden" onClick={() => setIsOpen(!isopen)}>
      <svg 
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16" 
        />
      </svg>
    </button>
    )}

    {isopen && (
        <div className="">
            <div className="md:hidden bg-gray-100 p-20 border-t border-orange-500 ">
        <ul className=" flex items-center text-white h-18 flex-col gap-8">
            <li className="list-none px-10 h-full flex items-center justify-between bg-gray-500 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500 hover:border-t border-orange-500"><Link to="/services">Services</Link></li>
            <li className="list-none px-10 h-full flex items-center justify-between bg-gray-500 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500"><Link to="/projects">Projects</Link></li>
            <li className="list-none px-10 h-full flex items-center justify-between bg-gray-500 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500"><Link to="/about">About Us</Link></li>
            <li className="list-none px-10 h-full flex items-center justify-between bg-gray-500 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500"><Link to="/career">Careers</Link></li>
            <button className="ml-1 px-15 h-18 bg-orange-500 text-black hover:bg-black hover:text-orange-500">Call Now!</button>
        </ul>

         </div>
    </div>

    )}

            </header>
        </div>
        </>
    )
}

export default Header