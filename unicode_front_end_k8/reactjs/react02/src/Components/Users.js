import React, { Component } from "react";
import { debounce } from "./debounce";
export class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      isLoading: true,
      isAdd: false,
      isEdit: false,
      name: "",
      id: 0,
    };
  }

  getUsers = async (query = null) => {
    let url = "http://localhost:3004/users?_order=desc&_sort=id";
    if (query) {
      url = "http://localhost:3004/users?_order=desc&_sort=id&q=" + query;
    }
    const response = await fetch(url);
    const users = await response.json();
    this.setState({ users: users, isLoading: false });
  };

  postUser = async (data) => {
    const response = await fetch("http://localhost:3004/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      this.getUsers();
      this.setState({ isAdd: false, name: "" });
    }
  };

  updateUser = async (id, data) => {
    const response = await fetch("http://localhost:3004/users/" + id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      this.getUsers();
      this.setState({ isEdit: false, name: "" });
    }
  };

  deleteUser = async (id) => {
    const response = await fetch("http://localhost:3004/users/" + id, {
      method: "DELETE",
    });
    if (response.ok) {
      this.getUsers();
    }
  };

  componentDidMount = async () => {
    this.getUsers();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name } = this.state;
    const user = { name: name };
    this.postUser(user);
  };

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleDelete = (id) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
      this.deleteUser(id);
    }
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const { name, id } = this.state;
    const user = { name: name };
    this.updateUser(id, user);
  };

  handleSearch = debounce((e) => {
    this.getUsers(e.target.value);
  }, 500);

  render() {
    const { users, isLoading, isAdd, name, isEdit } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={() => {
            this.setState({ isAdd: !isAdd });
          }}
        >
          Thêm
        </button>
        {isAdd && (
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Tên"
              required
              onChange={this.handleChange}
              value={name}
            />
            <button type="submit">Submit</button>
          </form>
        )}
        {isEdit && (
          <form action="" onSubmit={this.handleUpdate}>
            <input
              type="text"
              name="name"
              placeholder="Tên"
              required
              onChange={this.handleChange}
              value={name}
            />
            <button type="submit">Submit</button>
          </form>
        )}
        <form action="">
          <input
            type="search"
            name="query"
            placeholder="Từ khóa..."
            required
            onChange={this.handleSearch}
          />
        </form>
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>STT</th>
              <th>Name</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={4}>Loading...</td>
              </tr>
            ) : (
              users.map(({ id, name }, index) => (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.setState({ isEdit: true, name: name, id: id });
                      }}
                    >
                      Sửa
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.handleDelete(id);
                      }}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
