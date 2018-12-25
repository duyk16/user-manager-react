import React, { Component } from 'react'

export default class TableData extends Component {
  render() {
    return (
      <div className="table-user">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th scope="col">Stt</th>
              <th scope="col">User Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Trần Văn Lương</td>
              <td>0980 312 123</td>
              <td>
                <button className="btn btn-warning"> <i className="fa fa-edit" /> Sửa</button>
                <button className="btn btn-danger"> <i className="fa fa-delete" /> Xóa</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Trần Văn Lương</td>
              <td>0980 312 123</td>
              <td>
                <button className="btn btn-warning"> <i className="fa fa-edit" /> Sửa</button>
                <button className="btn btn-danger"> <i className="fa fa-delete" /> Xóa</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Trần Văn Lương</td>
              <td>0980 312 123</td>
              <td>
                <button className="btn btn-warning"> <i className="fa fa-edit" /> Sửa</button>
                <button className="btn btn-danger"> <i className="fa fa-delete" /> Xóa</button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Trần Văn Lương</td>
              <td>0980 312 123</td>
              <td>
                <button className="btn btn-warning"> <i className="fa fa-edit" /> Sửa</button>
                <button className="btn btn-danger"> <i className="fa fa-delete" /> Xóa</button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Trần Văn Lương</td>
              <td>0980 312 123</td>
              <td>
                <button className="btn btn-warning"> <i className="fa fa-edit" /> Sửa</button>
                <button className="btn btn-danger"> <i className="fa fa-delete" /> Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    )
  }
}
