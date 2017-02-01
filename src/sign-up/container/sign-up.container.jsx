import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { SignUpActions } from '../action/sign-up.actions'
import SignUpForm from '../component/sign-up.component.jsx'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.dispatch(SignUpActions.signUp(data));
    this.props.router.push('/');
  }

  render() {
    return (
      <div>
        <SignUpForm submit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log("this", state)
  return {
    
  }
}

export default connect(mapStateToProps)(SignUp)
