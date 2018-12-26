import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 text-center">User manager App with React JS</h1>
            <hr className="my-4" />
          </div>
        </div>
      </div>
    )
  }
}
