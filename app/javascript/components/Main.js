import React from "react"
import Navbar from "./Navbar"
import Body from "./Body"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PropTypes from "prop-types"
/* import PropTypes from "prop-types" */
class Main extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div>
          <Router>
        <Navbar/>
        <Body/>
        </Router>
        {/* <Body path='/body'/> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Main
