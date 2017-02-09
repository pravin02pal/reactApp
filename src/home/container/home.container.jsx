import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import User from '../component/user.component.jsx'
import FaUser from 'react-icons/lib/fa/user'
import { Button } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let users = [];
    let content = '';
        
    if (this.props.isLoggedIn) {
      Object.keys(this.props.users).map((key) => {
	users.push(<User key={key} user={this.props.users[key]} isAdmin={this.props.isAdmin} />);
      });
      if (this.props.isAdmin) {
	return content = 
	  <div>
	    <Link to="/signup"><Button bsStyle="primary" bsSize="large" className="pull-right">Add User<FaUser/></Button></Link>
	    <table className="table table-striped">
	      <thead>
		<tr>
		  <th>Name</th>
		  <th>Email</th>
		  <th>Action</th>
		</tr>
	      </thead>
	      <tbody>{users}</tbody>
	    </table>
	  </div>
      } else {
        return content = 
	  <div><h1>Welcome {this.props.user.name}</h1></div>
      }
    } else {
      return content = <h1>Home Page</h1>
    }

    return (
      {content}
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.signUpReducer.users,
    user: state.authReducer.user,
    isLoggedIn: state.authReducer.isLoggedIn,
    isAdmin: state.authReducer.isAdmin
  }
}

export default connect(mapStateToProps)(Home)

