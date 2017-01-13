import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Main extends Component {
  render(){
    return(
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">eSchool</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Login</NavItem>
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