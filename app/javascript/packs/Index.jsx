import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
/* import $ from 'jquery';
import Popper from 'popper.js'; */
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Main from "../components/Main";
import { BrowserRouter as Router, Route } from 'react-router-dom'

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Route path="/" component={Main} />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});