import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Main extends Component {
  render(){
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
            <Nav pullRight>
              <LinkContainer to="/signin">
				<NavItem>Login</NavItem>
			  </LinkContainer>
			  <LinkContainer to="/signup">
				<NavItem>SignUp</NavItem>
			  </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Main
