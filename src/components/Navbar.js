import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';

export class Navbar extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <img src="favicon.ico" width="50" height="60"/>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
            
        <li className="nav-item">
          <Link className="nav-link" to="/business">Business</Link> </li>
        <li className="nav-item">
          <Link className="nav-link" to="/entertainment">entertainment</Link> </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">general</Link> </li>
        <li className="nav-item">
          <Link className="nav-link" to="/health">health</Link> </li>
        <li className="nav-item">
          <Link className="nav-link" to="/science">science</Link> </li>
        <li className="nav-item">
          <Link className="nav-link" to="/sports">sports</Link> </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology">technology</Link> </li>
        
      </ul>
      
    </div>
  </div>
</nav>

      </div>
    )
  }
}

export default Navbar
