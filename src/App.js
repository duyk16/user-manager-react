import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TableData from './components/TableData';
import Search from './components/Search';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Data from './DataSample.json';


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userData: Data,
      editUser: {user: null, display: false}
    }
    this.searchUsers    = this.searchUsers.bind(this);
    this.createNewUser  = this.createNewUser.bind(this);
    this.editUser       = this.editUser.bind(this);
    this.cancelEditUser = this.cancelEditUser.bind(this);
    this.updateEditUser = this.updateEditUser.bind(this)

  }

  searchUsers(event) {
    let keyword = event.target.value.toLowerCase()
    this.setState({
      userData: Data.filter((item) => {
        // Find user by Name or Phone
        return (item.name.toLowerCase().indexOf(keyword) >= 0 || item.phone.indexOf(keyword) >= 0)
      })
    })
  }

  createNewUser(newUser) {
    // Parse permisstion to number
    let data = this.state.userData
    newUser.permission = parseInt(newUser.permission)
    data.push(newUser)
    this.setState({
      userData: data
    });
    // this.setState({
    //   userData: this.state.userData.push(newUser)
    // })
    console.log(data);
  }

  editUser(userId) {
    var user = this.state.userData.filter((item) => item.id === userId)[0]
    this.setState({
      editUser: {user: user, display: true}
    })
  }

  cancelEditUser() {
    this.setState({
      editUser: { ...this.state.editUser, display: false}
    })
  }

  updateEditUser(user) {
    const userIndex = this.state.userData.findIndex((item) => item.id == user.id)
    user = {...this.state.userData[userIndex], ...user}
    const newData = this.state.userData
    newData[userIndex] = {...user};
    this.setState({
      userData: newData
    })
    this.setState({
      editUser: { ...this.state.editUser, display: false}
    })
  }

  render() {

    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-3">
              <Search searchUsers={this.searchUsers}/>
              <AddUser createNewUser={this.createNewUser}/>

              {this.state.editUser.display && (
                <EditUser user={this.state.editUser.user}
                  cancelEditUser={this.cancelEditUser}
                  updateEditUser={this.updateEditUser}
                />
              )}
              
            </div>
            <div className="col-9">
              <TableData users={this.state.userData} editUser={this.editUser} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
