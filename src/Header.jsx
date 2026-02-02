import React from "react";


const Header = () => {
    return(
        <>
        <div className="px-10 py-10 bg-gray-100 ">
            <header className="h-18 bg-gray-100 flex justify-between items-center">
                <div className="bg-gray-700 text-white text-center px-10 h-18 border border-orange-500 ">
                    <p className="font-bold text-2xl">MCR</p>
                    <p>consturction</p>
                </div>
                <div className="flex items-center text-white h-18">
                    <li className="list-none px-10 h-full flex items-center justify-between bg-gray-700 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500 hover:border-t border-orange-500">Services</li>
                    <li className="list-none px-10 h-full flex items-center justify-between bg-gray-700 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500">Projects</li>
                    <li className="list-none px-10 h-full flex items-center justify-between bg-gray-700 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500">About Us</li>
                    <li className="list-none px-10 h-full flex items-center justify-between bg-gray-700 hover:bg-gray-100 hover:text-black border-t border-b border-orange-500">Careers</li>
                    <button className="ml-1 px-15 h-18 bg-orange-500 text-black hover:bg-black hover:text-orange-500">Call Now!</button>
                </div>
            </header>
        </div>
        </>
    )
}

export default Header