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
    let route = this.props.isLoggedIn ? '/' : '/signin';
    this.props.router.push(route);
  }

  render() {
    return (
      <div>
        <SignUpForm submit={this.handleSubmit} isLoggedIn={this.props.isLoggedIn} user={this.props.user} location={this.props.location}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.authReducer.isLoggedIn,
    user:  state.signUpReducer.users[ownProps.params.userEmail]
  }
}

export default connect(mapStateToProps)(SignUp)
