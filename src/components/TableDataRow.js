import React, { Component } from 'react'

export default class TableDataRow extends Component {
  permissionName(role) {
    if (role === 1) return 'Admin'
    if (role === 2) return 'Moderator'
    if (role === 3) return 'User'
  }

  render() {
    const { user, order } = this.props
    return (
      <tr>
        <th scope="row">{order + 1}</th>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td>{this.permissionName(user.permission)}</td>                
        <td>
          <button className="btn btn-warning"> <i className="fa fa-edit" /> Edit</button>
          <button className="btn btn-danger"> <i className="fa fa-trash-o" /> Delete</button>
        </td>
      </tr>

    )
  }
}
