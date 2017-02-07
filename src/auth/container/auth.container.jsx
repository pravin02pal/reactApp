import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { authActions } from '../action/auth.actions'
import SignInForm from '../component/auth.component.jsx'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(data) {
    this.props.dispatch(authActions.signIn(data));
    this.props.router.push('/');
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
  return {
    
  }
}

export default connect(mapStateToProps)(Auth)