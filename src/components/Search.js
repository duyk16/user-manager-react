import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
        <div className="search-from mb-3">
          <div className="form-inline">
            <div className="btn-group">
              <input type="text" className="form-control w-75" id="search-top" placeholder="Nhập từ khóa ..." />
              <button type="submit" className="btn btn-info">Search</button>
            </div>
          </div>
        </div>
    )
  }
}
