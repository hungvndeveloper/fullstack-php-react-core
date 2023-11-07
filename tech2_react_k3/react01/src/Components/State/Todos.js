import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todos.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from "../../Config.json";
import { v4 as uuid } from "uuid";

const { SERVER_API } = config;

export class Todos extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      todosList: [],
      users: [],
      isLoading: true,
      count: 0,
      event: null,
    };

    this.interval = null;
    this.isMount = false;
    //console.log("Constructor");
  }

  handleChangeValue = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleAddTodo = async (e) => {
    e.preventDefault();
    const { name } = this.state;

    if (name.trim() !== "") {
      const todo = {
        id: uuid(),
        name: name,
        isCompleted: false,
      };

      // this.setState({
      //   todosList: this.state.todosList.concat(todo),
      //   name: "",
      // });

      //Thêm công việc lên server
      const res = await fetch(`${SERVER_API}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(todo),
      });

      if (res.ok) {
        //this.getTodos();
        this.setState({
          event: "add",
        });
        toast.success("Thêm thành công");
      }
    } else {
      toast.error("Vui lòng nhập tên");
    }
  };

  handleRemoveTodo = async (id) => {
    if (window.confirm("Bạn có chắc chắn")) {
      // const index = this.state.todosList.findIndex((todo) => todo.id == id);
      // const data = [...this.state.todosList];
      // data.splice(index, 1);
      // this.setState({
      //   todosList: data,
      // });

      const res = await fetch(`${SERVER_API}/todos/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        // this.getTodos();
        this.setState({
          event: "remove",
        });
        toast.success("Xóa thành công");
      }
    }
  };

  handleMarkCompleted = async (id, status) => {
    // const index = this.state.todosList.findIndex((todo) => todo.id == id);
    // const data = [...this.state.todosList];
    // if (index !== -1) {
    //   data[index].isCompleted = status;
    //   this.setState({
    //     todosList: data,
    //   });
    //   if (status) {
    //     toast.success("Đánh dấu thành công");
    //   } else {
    //     toast.success("Bỏ đánh dấu thành công");
    //   }
    // }

    const res = await fetch(`${SERVER_API}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isCompleted: status,
      }),
    });

    if (res.ok) {
      this.setState({
        event: "mark",
      });
      if (status) {
        toast.success("Đánh dấu thành công");
      } else {
        toast.success("Bỏ đánh dấu thành công");
      }
    }
  };

  getUsers = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const users = await res.json();
    this.setState({
      users: users.data,
      isLoading: false,
    });
  };

  loadData = () => {
    // this.getUsers();
  };

  getTodos = async () => {
    const res = await fetch(`${SERVER_API}/todos`);
    const todos = await res.json();
    this.setState({
      todosList: todos,
      isLoading: false,
    });
  };

  componentDidMount = () => {
    this.isMount = true;
    if (this.isMount) {
      // this.getUsers();
      this.getTodos();
    }

    // this.interval = setInterval(() => {
    //   this.setState((prevState) => ({ count: prevState.count + 1 }));
    // }, 1000);
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.event !== this.state.event) {
      this.getTodos();
      this.setState({
        event: null,
      });
    }

    console.log("componentDidUpdate");
  };

  componentWillUnmount = () => {
    // console.log("componentWillUnmount");
    clearInterval(this.interval);
    this.isMount = false;
  };

  render() {
    // console.log("Render");
    const { todosList, name, users, isLoading, count } = this.state;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7">
            {/* <button onClick={this.loadData}>Load Data</button>
            <h2>Count: {count}</h2>
            {isLoading ? (
              <p>Đang tải...</p>
            ) : (
              users.map((user) => {
                return (
                  <p key={user.id}>
                    {user.first_name} - {user.email}
                  </p>
                );
              })
            )} */}
            <h2>Todos List App</h2>
            <div className="todo-list">
              {isLoading ? (
                <p>Đang tải...</p>
              ) : (
                todosList.map(({ id, name, isCompleted }) => {
                  return (
                    <div
                      className={`todo-item d-flex mb-3 ${
                        isCompleted ? "completed" : ""
                      }`}
                      key={id}
                    >
                      <input
                        type="checkbox"
                        onChange={(e) => {
                          this.handleMarkCompleted(id, e.target.checked);
                        }}
                        checked={isCompleted}
                      />
                      <span className="mx-3">{name}</span>
                      <span
                        onClick={(e) => {
                          this.handleRemoveTodo(id);
                        }}
                      >
                        Xóa
                      </span>
                    </div>
                  );
                })
              )}
            </div>
            <div className="todo-form">
              <form onSubmit={this.handleAddTodo}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tên công việc..."
                    onChange={this.handleChangeValue}
                    value={name}
                  />
                  <button type="submit" className="btn btn-primary">
                    Thêm
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Todos;

/*
Vòng đời Components

1. Constructor
- khai báo state
- khai báo các thuộc tính của class
2. Render
- Hiển thị giao diện
3. componentDidMount: Chạy sau khi component được render lần đầu tiên
- setState, call api,...
4. componentDidUpdate: Chạy khi state hoặc props thay đổi (Từ lần Render thứ 2 trở đi)
- Update lại giao diện,...
5. componentWillUnmount: Chạy khi component được loại bỏ khỏi DOM
- kiểm tra khi setState, loại bỏ setTimeout, setInterval...

Ví dụ về WillUnmount

- Home: Call api và setState
- About: Call api và setState

=> Truy cập trang home => api chưa trả về => chuyển luôn qua trang about

Xóa setInterval khi willUnmout

Buổi sau: Áp dụng kiến thức về vòng đời component, api, state xây dựng module quản lý người dùng

- Hiển thị danh sách
- Thêm người dungf
- Sưa người dùng
- Xóa
- Phân trang
- Lọc, tìm kiếm
- Xóa nhiều

=> Nâng cấp tách từng chức năng thành các component 
*/
