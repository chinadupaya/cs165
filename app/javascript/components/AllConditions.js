import React from "react"
import PropTypes from "prop-types"

const AllConditions = (props) => {
  var conditions = props.conditions.map((condition) =>{
    return(
      <div key={condition.id}>
        <h1>{condition.condition}</h1>
        <p>{condition.description}</p>
      </div>
    )
  })

  return(
    <div>
      {conditions}
    </div>
    )
}
    
  

export default AllConditions
