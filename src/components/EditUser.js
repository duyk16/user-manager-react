import React, { Component } from 'react'

export default class EditUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      id: this.props.user.id,
      name: this.props.user.name,
      phone: this.props.user.phone,
      permission: this.props.user.permission
    }
    this.submitEdit = this.submitEdit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this)
  }
  
  handleInputChange(event) {
    const target = event.target
    const name = target.name
    const value = (target.tagName === "SELECT") ? parseInt(target.value): target.value
    this.setState({
      [name]: value
    });
  }
  submitEdit() {
    const user = this.state;
    this.props.updateEditUser(user)
  }
  render() {
    const { name, phone, id, permission } = this.state 
    return (
      <div>
        <div className="card w-100 mt-2 border-danger">
          <div className="card-header bg-danger text-light">Edit for user ID: <small>{id}</small></div>
          <div className="card-body text-primary">
            <form>
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Username"
                  value={name}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <input type="tel" name="phone" className="form-control" placeholder="Phone" 
                  value={phone}
                  onChange={this.handleInputChange}
                />
              </div>
              <div className="form-group">
                <select className="form-control" name="permission" 
                  value={permission}
                  onChange={this.handleInputChange}
                >
                  <option value={0} disabled>Select permission</option>
                  <option value={1}>Admin</option>
                  <option value={2}>Moderator</option>
                  <option value={3}>User</option>
                </select>  
              </div>
              <button type="reset" className="btn btn-warning btn-block" 
                onClick={this.submitEdit}><i className="fa fa-edit"></i> Edit
              </button>
              <button className="btn btn-block btn-outline-secondary" 
                onClick={this.props.cancelEditUser}>Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    
    )
  }
}
