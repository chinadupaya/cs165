import React from "react"
import PropTypes from "prop-types"
import License from "./License"
const AllLicenses = (props) => {
  var licenses = props.licenses.map((license) =>{
    return(
      /* <%= collection_select(:license_info, :id, Condition.all, :id, :condition) %> */

      <tr key={license.id}>
        <License license={license} handleDelete={props.handleDelete}handleUpdate={props.handleUpdate}/>
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
            <th scope="col">application_type</th>
            <th scope="col">license_type</th>
            <th scope="col">skill_acquire</th>
            <th scope="col">conditions</th>
            <th scope="col">eval_name</th>
            <th scope="col">organ_donor</th>
          </tr>
        </thead>
        <tbody>
          {licenses}
        </tbody>
      </table>
    </div>
    )
}
    
  

export default AllLicenses
