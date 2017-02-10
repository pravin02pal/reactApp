import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import FaEdit from 'react-icons/lib/fa/edit'

class User extends Component {
  render() {
    return (
      <tr>
	{<td>{this.props.user.name}</td>}
	<td>{this.props.user.email}</td>
	{this.props.isAdmin && <td><Link to={`/user/${this.props.user.email}`}><FaEdit/></Link></td>}
      </tr>
    )
  }
}

export default User
