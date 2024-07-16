// import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
export default function Navbar() {
  return (
    <div >
      {/* <h1 className="text-5xl text-white">Logo</h1> */}
      <div>
        <nav
          className="flex justify-center items-center bg-green-600 text-white h-full"
        >
          <ul className="flex justify-center w-full h-full py-3">
            <li className="mx-2"><Link to="/food">Home</Link></li>
            <li className="mx-2"><Link to="/about">About</Link></li>
            <li className="mx-2"><Link to="/contact">Contact</Link></li>
            {/* <li className="mx-2"><Link to="/food">Food</Link></li> */}
          </ul>
        </nav>
      </div>
      <Outlet/>
    </div>
  );
}