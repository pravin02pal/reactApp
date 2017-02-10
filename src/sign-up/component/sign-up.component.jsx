import React, { PropTypes, Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.user ? this.props.user : {name:'',email:'',password:''};
    this.handleClick = this.handleClick.bind(this);
    this.handleLable = this.handleLable.bind(this);
  }
  
  handleClick() {
    this.props.submit(this.state);
  }
  
  handleLable() {
    if (this.props.isLoggedIn) {
      return this.props.user && this.props.location.pathname == `/user/${this.props.user.email}` ? {headingLable: "Edit User Profile", buttonLable: "Edit User"} : {headingLable: "Add User", buttonLable: "Add User"}; 
    } else {
      return {headingLable: "Please Register", buttonLable: "Sign Up"}
    }
  }

  render() {
    let lable = this.handleLable();
    return(
      <div className="wrapper">
	<form className="form-signin">       
	  <h2 className="form-signin-heading">{lable.headingLable}</h2>
	  <input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} className="form-control" name="name" placeholder="User name" required="" />
	  <input type="email" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} className="form-control" name="email" placeholder="Email Address" required="" />
	  <input type="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} className="form-control" name="password" placeholder="Password" required=""/>
	</form>
	<button className="btn btn-lg btn-primary btn-block" disabled={this.state.name.trim() == "" || this.state.email.trim() == "" || this.state.password.trim() == ""} onClick={this.handleClick} type="submit">{lable.buttonLable}</button>
      </div>
    );
  }
}

export default SignUpForm
