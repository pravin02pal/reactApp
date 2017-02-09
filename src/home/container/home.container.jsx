import React, { Component } from 'react';
import { connect } from 'react-redux'
import User from '../component/user.component.jsx'

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

      return content = <table className="table table-striped">
	<thead>
	  <tr>
	    <th>Name</th>
	    <th>Email</th>
	    {this.props.isAdmin && <th>Action</th>}
	  </tr>
	</thead>
	<tbody>{users}</tbody>
      </table>
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
    isLoggedIn: state.authReducer.isLoggedIn,
    isAdmin: state.authReducer.isAdmin
  }
}

export default connect(mapStateToProps)(Home)

