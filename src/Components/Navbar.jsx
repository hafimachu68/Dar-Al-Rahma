import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/daru-logo.png'; // Adjust the path as needed

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#FF1E00' }}>
      <div className="container">
      <Link className="navbar-brand d-flex align-items-center fw-bold" to="/">
  <img src={logo} alt="logo" width="30" height="30" className="me-2 logo-img" />
  <span className="animated-gradient-text">Dar Al Rahma</span>
</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link text-white" to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
