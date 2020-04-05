import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
  return (
    <div className="divnavbar">
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link className="left brand-logo" to="/">Funniest</Link>
        <ul className="right">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>Contact</NavLink></li>
        </ul>
      </div>
    </nav> 
    </div>
  )
}

export default withRouter(Navbar)