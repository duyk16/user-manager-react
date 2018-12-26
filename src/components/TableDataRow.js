import React, { Component } from 'react'

export default class TableDataRow extends Component {
  constructor(props, context) {
    super(props, context);
    this.onClickEditUser = this.onClickEditUser.bind(this);
    this.onClickDeleteUser = this.onClickDeleteUser.bind(this);
  }
  
  
  permissionName(role) {
    if (role === 1) return 'Admin'
    if (role === 2) return 'Moderator'
    if (role === 3) return 'User'

  }
  onClickEditUser() {
    this.props.editUser(this.props.user.id)
  }
  onClickDeleteUser() {
    this.props.deleteUser(this.props.user.id)
  }

  render() {
    const { user, order } = this.props
    const permissionStyle = 
      (user.permission === 1 ? {color: "red", fontWeight: "bold"} 
      : user.permission === 2 ? {color : "orange"} : {})
    return (
      <tr>
        <th scope="row">{order + 1}</th>
        <td>{user.name}</td>
        <td>{user.phone}</td>
        <td style={permissionStyle}>{this.permissionName(user.permission)}</td>                
        <td>
          <button className="btn btn-info" onClick={this.onClickEditUser}><i className="fa fa-edit" /> Edit</button>
          <button className="btn btn-danger" onClick={this.onClickDeleteUser}><i className="fa fa-trash-o" /> Delete</button>
        </td>
      </tr>

    )
  }
}
