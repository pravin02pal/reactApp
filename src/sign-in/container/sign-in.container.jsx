import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { authActions } from '../action/auth.actions'
import SignInForm from '../component/sign-in.component.jsx'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.dispatch(SignUpActions.signUp(data));
    this.props.router.push('/login');
  }

  render() {
    return (
      <div>
        <SignInForm submit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("this", state)
  return {
    
  }
}

export default connect(mapStateToProps)(SignIn)
