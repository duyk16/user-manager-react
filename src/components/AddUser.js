import React, { Component } from 'react'

export default class AddUser extends Component {
  render() {
    return (
      <div className="card w-100">
        <div className="card-header">Thêm mới user</div>
        <div className="card-body text-primary">
          <div className="form-group">
            <input type="text" name id className="form-control" placeholder="Tên user" />
          </div>
          <div className="form-group">
            <input type="text" name id className="form-control" placeholder="Số điện thoại" />
          </div>
          <div className="form-group">
            <select className="form-control" name id>
              <option value={0}>Quyền mặc định</option>
              <option value={1}>Admin</option>
              <option value={2}>Moderator</option>
              <option value={3}>User</option>
            </select>  
          </div>
          <button type="button" name id className="btn btn-primary btn-block">Thêm mới</button>
        </div>
      </div>
    )
  }
}
