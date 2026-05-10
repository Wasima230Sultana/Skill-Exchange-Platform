import React from 'react';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png';
import userIcon from '../assets/user.png';
const Navbar = () => {
    const links = [
        <NavLink className={'mr-4'} to="/"> Home </NavLink>,
        <NavLink to="/my-profile">My Profile</NavLink>
    ]
         
    
    return (
        <div className='mt-5'>
            <div className="navbar shadow-sm rounded-sm bg-gradient-to-r from-[rgb(205,240,234)] via-[rgb(247,219,240)] to-[rgb(190,174,226)]">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-green-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <img src={logo} alt="Logo" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <img src={userIcon} alt="User Icon" className="w-10 h-10 rounded-full" />
    <Link className="btn border-0 bg-sky-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-[rgb(60,70,140)] transition">Sign In</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;