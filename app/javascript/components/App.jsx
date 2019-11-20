import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from "./Main"
import AllLicenses from './AllLicenses'
import AllConditions from "./AllConditions"
import AllRestrictions from "./AllRestrictions"
import AllEmployees from "./AllEmployees"
import NewLicense from "./NewLicense"
class App extends React.Component {
    render() {
      return (
        <div>
          <Switch>
            <Route exact path="/" component={Main} />

          </Switch>
        </div>
      )
    }
  }
  
  export default App