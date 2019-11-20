class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          conditions:[],
          restrictions:[]
        };
      }
      componentDidMount(){
        fetch('/api/v1/conditions.json')
          .then((response) => {return response.json()})
          .then((data) => {this.setState({ conditions: data }) });
        fetch('/api/v1/restrictions.json')
            .then((response)=> {return response.json()})
            .then((data)=> {this.setState({ restrictions: data})});
      }
      render(){
          return(
              <div>
                  <AllConditions conditions={this.state.conditions}/>
                  <AllRestrictions restrictions={this.state.restrictions}/>
              </div>
          )
      }
}