import React, { Component } from 'react'

export default class AddUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAddUser: false
    }
  }
  
  addUser() {
    this.setState({
      showAddUser: !this.state.showAddUser
    })
  }

  render() {
    if (!this.state.showAddUser) {
      return (
        <button className="btn btn-block btn-outline-info" onClick={() => this.addUser()}>Add user</button>
      )
    } else {
      return (
        <div>
          <button className="btn btn-block btn-outline-secondary" onClick={() => this.addUser()}>Cancel</button>
          <div className="card w-100 mt-3">
            <div className="card-header">Add user</div>
            <div className="card-body text-primary">
              <div className="form-group">
                <input type="text" name="userName" className="form-control" placeholder="Username" />
              </div>
              <div className="form-group">
                <input type="text" name="userPhone" className="form-control" placeholder="Phone" />
              </div>
              <div className="form-group">
                <select className="form-control" name="userRole">
                  <option value={0} disabled selected>Select permission</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>User</option>
                </select>  
              </div>
              <button type="button" className="btn btn-primary btn-block">Submit</button>
            </div>
          </div>
        </div>
  
      )
    }
  }
}
