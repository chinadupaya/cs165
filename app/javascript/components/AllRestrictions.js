import React from "react"
import PropTypes from "prop-types"
const AllRestrictions = (props) => {
  var restrictions = props.restrictions.map((restriction) =>{
    return(
      <div key={restriction.id}>
        <h1>{restriction.code}</h1>
        <p>{restriction.meaning}</p>
      </div>
    )
  })

  return(
    <div>
      {restrictions}
    </div>
    )
}
    

export default AllRestrictions
