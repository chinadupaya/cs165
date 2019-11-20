import React from "react"
import PropTypes from "prop-types"
const AllEmployees = (props) => {
  var employees = props.employees.map((employee) =>{
    return(
      <div key={employee.id}>
        <h1>{employee.name}</h1>
        <p>{employee.field_office}</p>
      </div>
    )
  })

  return(
    <div>
      {employees}
    </div>
    )
}
    
  

export default AllEmployees
