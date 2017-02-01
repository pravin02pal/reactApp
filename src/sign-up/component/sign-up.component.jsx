import React, { PropTypes, Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'',email:'',password:''};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(event) {
    this.props.submit(this.state);
  }
  
  render() {
	return(
	  <div className="wrapper">
		<form className="form-signin">       
		  <h2 className="form-signin-heading">Please Register</h2>
		  <input type="text" onChange={e => this.setState({ name: e.target.value })} className="form-control" name="name" placeholder="User name" required="" />
		  <input type="email" onChange={e => this.setState({ email: e.target.value })} className="form-control" name="email" placeholder="Email Address" required="" />
		  <input type="password" onChange={e => this.setState({ password: e.target.value })} className="form-control" name="password" placeholder="Password" required=""/>
		</form>
		<button className="btn btn-lg btn-primary btn-block" onClick={this.handleClick} type="submit">Sign Up</button>
	  </div>
	);
  }
}

export default SignUpForm
