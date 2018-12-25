import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import TableData from './components/TableData';
import Search from './components/Search';
import AddUser from './components/AddUser';

import Data from './DataSample.json';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      userData: Data,
    }
    this.searchUsers = this.searchUsers.bind(this)
    this.createNewUser = this.createNewUser.bind(this)
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
    this.setState({
      newUser: newUser
    })
    let item = this.state.userData
    item.push(newUser)
    // this.setState({
    //   userData: this.state.userData.push(newUser)
    // })
    console.log(item);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-9">
              <TableData users={this.state.userData}/>
            </div>
            <div className="col-3">
              <Search searchUsers={this.searchUsers}/>
              <AddUser createNewUser={this.createNewUser}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
