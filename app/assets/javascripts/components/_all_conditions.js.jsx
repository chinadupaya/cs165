
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
    
  