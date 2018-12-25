import React, { Component } from 'react'

export default class AddUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      addUserStatus: false
    }
  }
  
  addUser() {
    this.setState({
      addUserStatus: !this.state.addUserStatus
    })
  }

  render() {
    if (!this.state.addUserStatus) {
      return (
        <button class="btn btn-block btn-outline-info" onClick={() => this.addUser()}>Thêm mới</button>
      )
    } else {
      return (
        <div>
          <button class="btn btn-block btn-outline-secondary" onClick={() => this.addUser()}>Đóng lại</button>
          <div className="card w-100 mt-3">
            <div className="card-header">Thêm mới user</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input type="text" name="userName" className="form-control" placeholder="Tên user" />
              </div>
              <div className="form-group">
                <input type="text" name="userPhone" className="form-control" placeholder="Số điện thoại" />
              </div>
              <div className="form-group">
                <select className="form-control" name="userRole">
                  <option value={0}>Quyền mặc định</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>User</option>
                </select>  
              </div>
              <button type="button" className="btn btn-primary btn-block">Gửi</button>
            </div>
          </div>
        </div>
  
      )
    }
  }
}
