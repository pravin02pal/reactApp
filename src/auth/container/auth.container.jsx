import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { authActions } from '../action/auth.actions'
import SignInForm from '../component/auth.component.jsx'

class Auth extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signOut = this.signOut.bind(this);
  }
  
  signOut(data) {
    this.props.dispatch(authActions.signOut());
    this.props.router.push('/');
  }

  handleSubmit(data) {
    this.props.dispatch(authActions.signIn(data));
    this.props.router.push('/');
  }
  
  componentWillMount() {
    if (this.props.location.pathname == '/signout') {
      this.signOut();
    }
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
