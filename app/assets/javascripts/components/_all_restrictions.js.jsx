
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
      
    