import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TableData from './components/TableData';
import Search from './components/Search';
import AddUser from './components/AddUser';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-9">
              <TableData />
            </div>
            <div className="col-3">
              <Search />
              <AddUser />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
