import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="ecell-navbar">
      <div className="nav-inner">
        <Link to="/" className="nav-brand">ECELL MSIT</Link>
        <div className="nav-links">
          <Link to="/">Contact</Link>
          <Link to="/about">About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
