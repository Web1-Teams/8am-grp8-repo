import { Link } from 'react-router-dom';

import { BsCartPlus } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
 import "./Navbar.css"
 import {  FaGoogle } from "react-icons/fa"



const NavHero = () => {

  

  return (
    <nav className="navbar navbar-expand-lg bg-white py-4 shadow-sm">
      <div className="container">
        <div className='d-flex align-items-center gap-2'>
        <FaGoogle className="Logo" size={30} />
        <Link className="navbar-brand " to="/"> 
          Golden Glow
        </Link>

        </div>
       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse" id="navbarNav">






<ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link className="nav-link hover-link" to="/">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle hover-link"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            to="/event"  
            >
              Event
            </Link>
            <ul className="dropdown-menu">
              <li><Link  className="dropdown-item" to="/event/engagement">Engagement</Link></li>
              <li><Link  className="dropdown-item" to="/event/graduation">Graduation</Link></li>
              <li><Link  className="dropdown-item" to="/event/birthday">Birthday</Link></li>
            </ul>


          </li>
          <li className="nav-item">
            <Link className="nav-link hover-link" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link hover-link" to="/food-drink">Food</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link hover-link" to="/cakes">Cakes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link hover-link" to="/about">About</Link>
          </li>
     </ul>
       










          <div className="new ">
           <CiSearch size={28} />
           <div className=" position-relative">
           <BsCartPlus size={28}/> 
          <span className="cartItem">
        0
        </span>
        </div>
        </div>
        </div>
      </div>
    </nav>
  );
};
export default NavHero;

