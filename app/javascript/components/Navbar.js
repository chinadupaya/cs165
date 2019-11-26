import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class Navbar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ul className="nav">
            <li className="nav-item"><Link to ="/home" className="nav-link">Home</Link></li>
            <li className="nav-item"><Link to ="/licenses" className="nav-link">Licenses</Link></li>
            <li className="nav-item"><Link to ="/employees" className="nav-link">Employees</Link></li>
            <li className="nav-item"><Link to ="/conditions" className="nav-link">Conditions</Link></li>
            <li className="nav-item"><Link to ="/restrictions" className="nav-link">Restrictions</Link></li>
            <li className="nav-item"><Link to ="/joins" className="nav-link">Joins</Link></li>
        </ul>
      </React.Fragment>
    );
  }
}

export default Navbar
