import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Test Project</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Calculator</Link>
          </li>
          <li className="navbar-item">
          <Link to="/history" className="nav-link">History</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}