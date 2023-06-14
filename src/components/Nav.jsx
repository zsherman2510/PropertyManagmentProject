import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar_logo">
          <Link to="/">Property Management</Link>
        </div>
        <ul className='navbar_links'>
          <li className="navbar_link">
            <Link to="/properties">Properties</Link>
          </li>
          <li className="navbar_link">
          <Link to="/tenants">Tenants</Link>
          </li>
          <li className="navbar_link">
            <Link to="/payments">Payments</Link>
          </li>
          <li className="navbar_link">
            <Link to="/maintenance">Maintenance</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav