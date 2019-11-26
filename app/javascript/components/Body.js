import React from "react"

import AllConditions from "./AllConditions"
import AllRestrictions from "./AllRestrictions"
import AllEmployees from "./AllEmployees"
import AllLicenses from "./AllLicenses"
import NewLicense from "./NewLicense"
import AllJoins from "./AllJoins"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PropTypes from "prop-types"
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conditions:[],
      restrictions:[],
      employees:[],
      licenses:[],
      joins:[]
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewLicense = this.addNewLicense.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteLicense = this.deleteLicense.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.updateLicense = this.updateLicense.bind(this)
  }
  handleFormSubmit(license_num, restriction_code,application_type,license_type, skill_acquire, conditions, eval_name, organ_donor){
    let body = JSON.stringify({license: {license_num:license_num, 
      restriction_code:restriction_code,
      application_type: application_type,
      license_type:license_type, 
      skill_acquire:skill_acquire, 
      conditions:conditions, 
      eval_name:eval_name, 
      organ_donor:organ_donor} })
      /* http://localhost:3000/
      https://stormy-citadel-68784.herokuapp.com/ */
    fetch(`http://localhost:3000/api/v1/licenses/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body,
      }).then((response) => {return response.json()})
      .then((license)=>{
        this.addNewLicense(license)
      }) 
  }
  addNewLicense(license){
    this.setState({
      licenses: this.state.licenses.concat(license)
    })
  }
  handleDelete(id){
    fetch(`http://localhost:3000/api/v1/licenses/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
      this.deleteLicense(id)
      })
  }
  deleteLicense(id){
    var newLicenses = this.state.licenses.filter((license) => license.id !== id)
    this.setState({
      licenses: newLicenses
    })
  }
  handleUpdate(license){
    fetch(`http://localhost:3000/api/v1/licenses/${license.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({license: license}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateLicense(license)
      })
  }
  updateLicense(license){
    let newLicenses = this.state.licenses.filter((l) => l.id !== license.id)
    newLicenses.push(license)
    this.setState({
      licenses: newLicenses
    })
  }
  componentDidMount(){
    fetch('/api/v1/conditions.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({ conditions: data }) });
    fetch('/api/v1/restrictions.json')
        .then((response)=> {return response.json()})
        .then((data)=> {this.setState({ restrictions: data})});
    fetch('/api/v1/employees.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({employees: data})});
    fetch('/api/v1/licenses.json')
      .then((response) => {return response.json()})
      .then((data) => {this.setState({licenses: data})})
    fetch('api/v1/joins.json')
      .then((response)=>{return response.json()})
      .then((data)=>{this.setState({joins:data})})
  }
  render(){
      return(
          <div>
            <Switch>
              <Route path="/home">
                <div>
                  <h1>HI WELCOME TO LICENSE PAGE</h1>
                </div>
              </Route>
              <Route path="/conditions">
                <AllConditions conditions={this.state.conditions}/>
              </Route>
              <Route path="/restrictions">
                <AllRestrictions restrictions={this.state.restrictions}/>
              </Route>
              <Route path="/employees">
                <AllEmployees employees={this.state.employees}/>
              </Route>
              <Route path="/licenses">
                <NewLicense handleFormSubmit={this.handleFormSubmit}/>
                
                <AllLicenses licenses = {this.state.licenses}
                handleDelete = {this.handleDelete}
                handleUpdate = {this.handleUpdate}/> 
              </Route>
              <Route path="/joins">
                <AllJoins joins={this.state.joins}/>
              </Route>
            </Switch>
          </div>
      )
  }
}

export default Body
