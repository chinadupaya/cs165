import React from "react"
import PropTypes from "prop-types"
const AllJoins = (props) => {
  var joins = props.joins.map((join) =>{
    return(
      <tr key={join.id}>
        <td>{join.license_num}</td>
        <td>{join.restriction_code}</td>
        <td>{join.meaning}</td>
        <td>{join.conditions}</td>
        <td>{join.description}</td>
        <td>{join.eval_name}</td>
        <td>{join.field_office}</td>
      </tr>
    )
  })

  return(
    <div className="table-responsive">
      <table className="table">
        <thead>
        <tr>
          <th scope="col">license_num</th>
          <th scope="col">restriction_code</th>
          <th scope="col">restriction_meaning</th>
          <th scope="col">conditions</th>
          <th scope="col">condition_description</th>
          <th scope="col">employee</th>
          <th scope="col">field_office</th>
          </tr>
        </thead>
        {joins}
      </table>
    </div>
    )
}
    
export default AllJoins
