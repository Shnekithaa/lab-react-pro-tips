import React from 'react';
import './App.css';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to= "/">Kalvium</Link>
        <ul>
            <li><Link to = "/contact">Contact</Link></li>
            <li><Link to = "/registration">Registration Form</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
