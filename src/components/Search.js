import React, { Component } from 'react'

export default class Search extends Component {

  render() {
    return (
        <div className="search-from mb-3">
          <div className="form-inline">
              <input type="text" className="form-control w-100" placeholder="Find users ..." onKeyUp={this.props.searchUsers}/>
          </div>
        </div>
    )
  }
}
