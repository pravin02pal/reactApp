import React, {Component} from 'react';
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.handleLink = this.handleLink.bind(this);
  }
  
  handleLink() {
    if (this.props.isLoggedIn) {
      return (
        <Nav pullRight>
          <LinkContainer to="/signout">
            <NavItem>Sign Out</NavItem>
          </LinkContainer>
        </Nav>
      )
    } else {
      return (
        <Nav pullRight>
          <LinkContainer to="/signin">
            <NavItem>Sign In</NavItem>
          </LinkContainer>
          <LinkContainer to="/signup">
            <NavItem>Sign Up</NavItem>
          </LinkContainer>
        </Nav>
      )
    }
  }
  
  render(){
    var links = this.handleLink();
    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">eSchool</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            {links}
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    invalidUser: state.authReducer.invalidUser,
    isAdmin: state.authReducer.isAdmin,
    isLoggedIn: state.authReducer.isLoggedIn
  }
}

export default connect(mapStateToProps)(Main);
