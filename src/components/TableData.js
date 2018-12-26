import React, { Component } from 'react'
import TableDataRow from './TableDataRow';

export default class TableData extends Component {
  render() {
    const { users } = this.props
    return (
      <div className="table-user">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">User Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Role</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, key) => {
              return (
                <TableDataRow 
                  user={user}
                  key={key}
                  order={key}
                  editUser={this.props.editUser}
                  deleteUser={this.props.deleteUser}
                />
              )
            })}
          </tbody>
        </table>
      </div>

    )
  }
}
