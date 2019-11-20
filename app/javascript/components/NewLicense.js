import React from "react"
import PropTypes from "prop-types"
const NewLicense = (props) => {

  let formFields = {}
 
  return(
    <form onSubmit={ (e) => { props.handleFormSubmit(formFields.license_num.value, 
      formFields.restriction_code.value,
      formFields.application_type.value,
      formFields.license_type.value,
      formFields.skill_acquire.value,
      formFields.conditions.value,
      formFields.eval_name.value,
      formFields.organ_donor.value); 
      e.target.reset();}}>
      <div className="form-group">
     <input ref={input => formFields.license_num = input} placeholder='Enter license number'/>
     </div>
     {/* <input ref={input => formFields.license_type = input} placeholder='Enter license type' /> */}
     <div className="form-group">
     <label htmlFor="select0">Restriction Code</label>
     <select className="form-control"id="select0" ref={input => formFields.restriction_code = input}>
       <option>1</option>
       <option>2</option>
       <option>3</option>
       <option>4</option>
       <option>5</option>
       <option>6</option>
       <option>7</option>
       <option>8</option>
     </select>
     </div>
     <div className="form-group">
     <label htmlFor="select2">Application Type</label>
     <select className="form-control" id="select2" ref={input => formFields.application_type = input}>
       <option>New</option>
       <option>Delinquent/Dormant License</option>
       <option>Prof to Non-prof</option>
       <option>Non-prof to Prof</option>
       <option>Foreign Lic. Conversion</option>
       <option>Renewal</option>
       <option>Additional Restriction Code</option>
       <option>Duplicate</option>
       <option>Change Address</option>
       <option>Change Civil Status</option>
       <option>Change Name</option>
       <option>Change DOB</option>
       <option>Others</option>
     </select>
     </div>
     <div className="form-group">
     <label htmlFor="select3">License Type</label>
     <select className="form-control" id="select3" ref={input => formFields.license_type = input}>
      <option>Student Permit</option>
      <option>Non-Professional</option>
      <option>Professional</option>
      <option>Conductor</option>
     </select>
     </div>
     <div className="form-group">
     <label htmlFor="select4">Skill Acquired</label>
     <select className="form-control" id="select4" ref={input => formFields.skill_acquire = input}>
       <option>Driving School</option>
       <option>Licensed Private Person</option>
     </select>
     </div>
     <div className="form-group">
     <label htmlFor="select1">Conditions</label>
     <select className="form-control"id="select1" ref={input => formFields.conditions = input}>
       <option>None</option>
       <option>A</option>
       <option>B</option>
       <option>C</option>
       <option>D</option>
       <option>E</option>
     </select>
     </div>
     <div className="form-group">
     <label htmlFor="select5">Evaluator</label>
     <select className="form-control" id="select5" ref={input => formFields.eval_name = input}>
       <option>Dupaya, Annysia</option>
       <option>Angeles, Mathena</option>
       <option>Gopalan, Amberly</option>
     </select>
     </div>
     <div className="form-group">
     <label htmlFor="select6">Organ Donor?</label>
     <select className="form-control" id="select6" ref={input => formFields.organ_donor = input}>
       <option>Yes</option>
       <option>No</option>
     </select>
     </div>
     <button className="btn btn-primary"type="submit">Submit</button>

    </form>
  )
}

export default NewLicense
