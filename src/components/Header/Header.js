import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logos/Group 1329.png'
const Header = () => {

  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
      
      <img height="50px" src= {logo} alt=""/>

      <div  class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        
        </ul>
        <div>
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
                <Link className="nav-link ml-2 text-dark" to="/home">Home</Link>
           </li>
           <li className="nav-item">
                <Link className="nav-link ml-2 text-dark" to="/donation">Donation</Link>
           </li>
           <li className="nav-item">
                <Link className="nav-link ml-2 text-dark" to="/events">Events</Link>
           </li>
           <li className="nav-item">
                <Link className="nav-link ml-2 text-dark" to="/blog">Blog</Link>
           </li>
           <li className="nav-item">
           <Link className="nav-link ml-4 btn btn-primary px-3" to="/login">Login</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link ml-2 btn text-white btn-dark px-3" to="/adminDashboard">Admin</Link>
          </li>
        </ul>
        </div>
        
      </div>
    </nav>

  );
};

export default Header;