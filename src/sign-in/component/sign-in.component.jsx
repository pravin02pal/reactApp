import React, { PropTypes, Component } from 'react'

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'',email:'',password:''};
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.props.submit(this.state);
  }
  
  render() {
	return(
	  <div className="wrapper">
		<form className="form-signin">       
		  <h2 className="form-signin-heading">Please Sign In</h2>
		  <input type="email" onChange={e => this.setState({ email: e.target.value })} className="form-control" name="email" placeholder="Email Address" required="" />
		  <input type="password" onChange={e => this.setState({ password: e.target.value })} className="form-control" name="password" placeholder="Password" required=""/>
		</form>
		<button className="btn btn-lg btn-primary btn-block" onClick={this.handleClick} type="submit">Sign In</button>
	  </div>
	);
  }
}

export default SignInForm
