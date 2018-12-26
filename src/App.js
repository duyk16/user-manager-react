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
      userData: [],
      editUser: {user: null, display: false}
    }
    this.searchUsers    = this.searchUsers.bind(this);
    this.createNewUser  = this.createNewUser.bind(this);
    this.editUser       = this.editUser.bind(this);
    this.cancelEditUser = this.cancelEditUser.bind(this);
    this.updateEditUser = this.updateEditUser.bind(this);
    this.deleteUser     = this.deleteUser.bind(this)

  }

  
  componentWillMount() {
    // Check localStorage
    if (!localStorage.getItem('userData')) {
      localStorage.setItem('userData', JSON.stringify(Data))
    }
    let data = localStorage.getItem('userData')
    this.setState({
      userData: JSON.parse(data)
    });
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
    let newData = this.state.userData
    newUser.permission = parseInt(newUser.permission)
    newData.push(newUser)
    this.setState({
      userData: newData
    });

    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData))
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
    const userIndex = this.state.userData.findIndex((item) => item.id === user.id)
    user = {...this.state.userData[userIndex], ...user} // update data user
    const newData = this.state.userData
    newData[userIndex] = {...user}; // update edited user to data
    this.setState({
      userData: newData
    })
    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData))
    
    // Hide edit form
    this.setState({
      editUser: { ...this.state.editUser, display: false}
    })
  }

  deleteUser(userId) {
    const newData = this.state.userData.filter((item) => item.id !== userId)
    this.setState({
      userData: newData
    });
    // Save to local storage
    localStorage.setItem('userData', JSON.stringify(newData))
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
              <TableData 
                users={this.state.userData}
                editUser={this.editUser}
                deleteUser={this.deleteUser} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
