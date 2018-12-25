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
  }

  searchUsers(event) {
    let keyword = event.target.value
    this.setState({
      userData: Data.filter((item) => {
        return item.name.indexOf(keyword) >= 0
      })
    })
  }

  render() {
    console.log(this.state.userData)
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
              <AddUser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
