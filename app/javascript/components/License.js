import React from "react"
import PropTypes from "prop-types"
class License extends React.Component {
  constructor(props){
    super(props);
    this.state={
      editable:false
    }
    this.handleEdit=this.handleEdit.bind(this)
  }
  handleEdit(){
    if(this.state.editable){
      let license_num = this.license_num.value
      let restriction_code = this.restriction_code.value
      let application_type = this.application_type.value
      let license_type = this.license_type.value
      let skill_acquire = this.skill_acquire.value
      let conditions = this.conditions.value
      let eval_name = this.eval_name.value
      let organ_donor = this.organ_donor.value
      let id = this.props.license.id
      let license = {id: id, license_num:license_num, 
        restriction_code:restriction_code,
        application_type: application_type,
        license_type:license_type, 
        skill_acquire:skill_acquire, 
        conditions:conditions, 
        eval_name:eval_name, 
        organ_donor:organ_donor}
      this.props.handleUpdate(license)
    }
    this.setState({
      editable:!this.state.editable
    })
  }
  render () {
    let license_num = this.state.editable ?<td> <input type='text' ref={input => this.license_num = input} defaultValue={this.props.license.license_num}/>
    </td>:<td>{this.props.license.license_num}</td>
    let restriction_code = this.state.editable ?<td> <select className="form-control"id="select0" ref={input => this.restriction_code = input}>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    <option>6</option>
    <option>7</option>
    <option>8</option>
    
  </select>
  </td>:<td>{this.props.license.restriction_code}</td>
    let application_type=this.state.editable ? 
    <td>
    <select className="form-control" id="select2" ref={input => this.application_type = input}>
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
     </td>
    :<td>{this.props.license.application_type}</td>
    let license_type=this.state.editable ?
    <td>
     <select className="form-control" id="select3" ref={input => this.license_type = input}>
      <option>Student Permit</option>
      <option>Non-Professional</option>
      <option>Professional</option>
      <option>Conductor</option>
     </select></td>
  
    :<td>{this.props.license.license_type}</td>
    let skill_acquire = this.state.editable ? 
    <td>
    <select className="form-control" id="select4" ref={input => this.skill_acquire = input}>
      <option>Driving School</option>
      <option>Licensed Private Person</option>
      </select></td>
      :<td>{this.props.license.skill_acquire}</td>
    let conditions = this.state.editable ?
    <td>
      <select className="form-control"id="select1" ref={input => this.conditions = input}>
      <option>None</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
      <option>E</option>
      </select></td>
      :<td>{this.props.license.conditions}</td>
      let eval_name = this.state.editable?
      <td>
          <select className="form-control" id="select5" ref={input => this.eval_name = input}>
          <option>Dupaya, Annysia</option>
          <option>Angeles, Mathena</option>
          <option>Gopalan, Amberly</option>
        </select>
        </td>
        :<td>{this.props.license.eval_name}</td>
      let organ_donor = this.state.editable ? 
      <td><select className="form-control" id="select6" ref={input => this.organ_donor = input}>
      <option>Yes</option>
      <option>No</option>
    </select></td>
      :<td>{this.props.license.organ_donor}</td>
    return (
      <React.Fragment>
        {license_num}
        {restriction_code}
        {application_type}
        {license_type}
        {skill_acquire}
        {conditions}
        {eval_name}
        {organ_donor}
        <td><button className="btn btn-outline-primary" onClick={()=> this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button></td>
        <td><button className="btn btn-outline-danger" onClick={() => this.props.handleDelete(this.props.license.id)}>Delete</button></td>
    </React.Fragment>
    );
  }
}

export default License
