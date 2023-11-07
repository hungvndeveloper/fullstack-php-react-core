import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; //minify
import config from "../../Config.json";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const { SERVER_API } = config;

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      showModal: false,
      form: {
        name: "",
        email: "",
        status: false,
      },
      errors: {
        name: "",
        email: "",
      },
      event: null,
      action: "add",
      filters: {},
      paginate: {
        maxPage: 0,
        currentPage: 1,
      },
      deleteCount: 0,
    };

    this.perPage = 3;

    this.checkAllRef = React.createRef(); //sing ref
    this.checkItemRef = []; //Tạo multi ref

    this.deleteIds = [];
  }

  componentDidMount = () => {
    //call api
    const { currentPage } = this.state.paginate;
    this.getUsers({}, this.perPage, currentPage);

    //tạo ref
    this.checkItemRef = [];
    for (let i = 1; i <= this.perPage; i++) {
      this.checkItemRef.push(React.createRef());
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    //console.log(prevProps, this.props);
    //console.log(prevState);
    if (prevState.event !== this.state.event) {
      let { currentPage } = this.state.paginate;

      this.getUsers({}, this.perPage, currentPage);

      this.checkAllRef.current.checked = false;

      this.setState({
        event: null,
      });
    }

    /*
    - Chạy từ lần render thứ 2 trở đi
    */
    //console.log(`componentDidUpdate`);
  };

  getUsers = async (filters = {}, limit = 3, page = 1) => {
    let url;

    if (Object.keys(filters).length) {
      url =
        `${SERVER_API}/users?` +
        new URLSearchParams(filters).toString() +
        `&_limit=${limit}&_page=${page}`;
    } else {
      url = `${SERVER_API}/users?_limit=${limit}&_page=${page}`;
    }

    const res = await fetch(url);

    const users = await res.json();

    //Lấy tổng số bản ghi
    const totalRows = res.headers.get("x-total-count");

    //Tính tổng số trang
    const maxPage = Math.ceil(totalRows / limit);

    const paginate = { ...this.state.paginate };

    paginate.maxPage = maxPage;

    this.setState({
      users: users,
      isLoading: false,
      paginate: paginate,
    });
    //console.log(users);
  };

  setModalStatus = (status) => {
    this.setState({
      showModal: status,
    });
  };

  handleShowModal = (id = 0) => {
    this.setModalStatus(true);

    let action = "add";

    if (id > 0) {
      this.getUser(id); //call api + set state
      action = "update";
    } else {
      this.resetForm();
    }

    this.setState({
      action: action,
    });

    /*
    Mục đích của state action
    - Hiển thị tiêu đề trong modal
    - Xác định sửa, thêm trong phần submit form

    Mục đích của gọi hàm getUser()
    - Lấy user theo id từ api
    - Set state để hiển thị lên form

    Mục đích của gọi hàm resetForm()
    - Reset dữ liệu trong ô input khi mở modal
    - Reset lỗi trong ô input khi mở modal
    */
  };

  resetForm = () => {
    this.setState({
      form: {
        name: "",
        email: "",
        status: false,
      },
      errors: {},
    });
  };

  //Lấy dữ liệu từ api (theo id)
  getUser = async (id) => {
    const res = await fetch(`${SERVER_API}/users/${id}`);
    const data = await res.json();

    this.setState({
      form: data,
    });
  };

  handleHideModal = () => {
    this.setModalStatus(false);
  };

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { id, name, email, status } = this.state.form;
    const { action } = this.state; //nhận biết thêm hay sửa

    const errors = {};

    if (name.trim() === "") {
      errors.name = "Vui lòng nhập tên";
    }

    if (email.trim() === "") {
      errors.email = "Vui lòng nhập email";
    }

    this.setState({
      errors: errors,
    });

    //Kiểm tra xem có lỗi hay không?
    //Nếu không có lỗi => call api

    if (Object.keys(errors).length === 0) {
      //call api
      const data = {
        name: name,
        email: email,
        status: parseInt(status) === 1 ? true : false,
      };

      if (action == "add") {
        this.postUser(data);
      } else {
        this.updateUser(data, id);
      }

      //Đóng modal
      this.handleHideModal();
    }
  };

  postUser = async (data) => {
    const res = await fetch(`${SERVER_API}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //console.log(res);
    if (res.ok) {
      this.dispatchEvent("create");
      //this.getUsers();
      //this.getPagination()
      toast.success("Thêm thành công");
    } else {
      toast.error("Đã có lỗi xảy ra. Vui lòng thử lại sau");
    }
  };

  //Cập nhật api
  updateUser = async (data, id) => {
    if (id !== undefined) {
      const res = await fetch(`${SERVER_API}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      //console.log(res);
      if (res.ok) {
        this.dispatchEvent("update");

        toast.success("Cập nhật thành công");
      } else {
        toast.error("Đã có lỗi xảy ra. Vui lòng thử lại sau");
      }
    }
  };

  handleChangeValue = (e) => {
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;
    this.setState({
      form: data,
    });
  };

  dispatchEvent = (eventName) => {
    this.setState({
      event: eventName,
    });
  };

  handleDeleleUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //call api
        this.deleteUser(id);
      }
    });
  };

  deleteUser = async (id, isAnyDelete = false) => {
    const res = await fetch(`${SERVER_API}/users/${id}`, {
      method: "DELETE",
    });
    if (res.ok) {
      if (!isAnyDelete) {
        const paginate = this.state.paginate;
        paginate.currentPage = 1;
        this.setState({
          paginate: paginate,
        });

        this.dispatchEvent("delete");

        toast.success("Xóa thành công");
      }
    } else {
      toast.error("Đã có lỗi xảy ra. Vui lòng thử lại sau");
    }
  };

  handleChangeFilter = (e) => {
    const filters = { ...this.state.filters };

    if (e.target.name === "status") {
      if (e.target.value === "active" || e.target.value === "inactive") {
        filters.status = e.target.value === "active" ? true : false;
      } else {
        delete filters.status;
      }
    }

    if (e.target.name === "keyword") {
      filters.q = e.target.value;
    }

    this.setState({
      filters: filters,
    });
  };

  handleSubmitFilter = (e) => {
    e.preventDefault();
    const { filters } = this.state;

    this.getUsers(filters);
  };

  renderPaginate = () => {
    const { maxPage, currentPage } = this.state.paginate;

    const pageItems = [];

    const goPaginate = (page) => {
      const paginate = { ...this.state.paginate };
      paginate.currentPage = page;
      this.setState({
        paginate: paginate,
      });

      //Re-render table
      this.dispatchEvent("paginate");
    };

    for (let page = 1; page <= maxPage; page++) {
      pageItems.push(
        <li
          className={`page-item ${page == currentPage ? "active" : ""}`}
          key={page}
        >
          <a
            className="page-link"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              goPaginate(page);
            }}
          >
            {page}
          </a>
        </li>
      );
    }

    return (
      maxPage > 0 && (
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Trước
              </a>
            </li>
            {pageItems}
            <li className="page-item">
              <a className="page-link" href="#">
                Sau
              </a>
            </li>
          </ul>
        </nav>
      )
    );
  };

  handleCheckAll = (e) => {
    const checkStatus = e.target.checked;
    if (!checkStatus) {
      this.deleteIds = [];
    }
    let count = 0;
    this.checkItemRef.forEach((checkbox) => {
      if (checkbox.current !== null) {
        checkbox.current.checked = checkStatus;
        if (checkStatus) {
          count++;
          this.deleteIds.push(checkbox.current.value);
        }
      }
    });

    this.setState({
      deleteCount: count,
    });
  };

  handleCheckItem = (e) => {
    //Xử lý khi bỏ check
    if (!e.target.checked) {
      this.setState((prevState) => ({
        deleteCount: prevState.deleteCount - 1,
      }));

      this.checkAllRef.current.checked = false;

      const index = this.deleteIds.findIndex((item) => item == e.target.value);
      this.deleteIds.splice(index, 1);

      return;
    } else {
      this.setState((prevState) => ({
        deleteCount: prevState.deleteCount + 1,
      }));
      this.deleteIds.push(e.target.value);
    }

    const status = this.checkItemRef.every((checkbox) => {
      return checkbox.current.checked == true;
    });

    this.checkAllRef.current.checked = status;
  };

  handleAnyDelete = () => {
    const { deleteCount } = this.state;
    if (deleteCount > 0) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          //call api
          this.deleteIds = [...new Set(this.deleteIds)]; //loại bỏ phần tử trùng

          this.deleteIds.forEach((id) => {
            this.deleteUser(id, true);
          });

          const paginate = { ...this.state.paginate };
          paginate.currentPage = 1;
          this.setState({
            paginate: paginate,
          });

          toast.success("Xóa người dùng thành công");
          this.dispatchEvent("delete");
        }
      });
    }
  };

  render() {
    const { users, isLoading, showModal, errors, form, action, deleteCount } =
      this.state;

    const { name, email, status } = form;

    return (
      <div className="container">
        <h1>Quản lý người dùng</h1>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            this.handleShowModal();
          }}
        >
          Thêm mới
        </button>
        <hr />
        <form onSubmit={this.handleSubmitFilter}>
          <div className="row">
            <div className="col-3">
              <select
                className="form-select"
                name="status"
                onChange={this.handleChangeFilter}
              >
                <option value={"all"}>Tất cả trạng thái</option>
                <option value={"active"}>Kích hoạt</option>
                <option value={"inactive"}>Chưa kích hoạt</option>
              </select>
            </div>
            <div className="col-7">
              <input
                type="search"
                className="form-control"
                placeholder="Nhập tên, email..."
                name="keyword"
                onChange={this.handleChangeFilter}
              />
            </div>
            <div className="col-2 d-grid">
              <button type="submit" className="btn btn-primary">
                Tìm kiếm
              </button>
            </div>
          </div>
        </form>
        <hr />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col" width="5%">
                <input
                  type="checkbox"
                  onChange={this.handleCheckAll}
                  ref={this.checkAllRef}
                />
              </th>
              <th scope="col">Tên</th>
              <th scope="col">Email</th>
              <th scope="col">Trạng thái</th>
              <th scope="col" width="5%">
                Sửa
              </th>
              <th scope="col" width="5%">
                Xóa
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center">
                  Loading...
                </td>
              </tr>
            ) : (
              users.length > 0 &&
              users.map(({ id, name, email, status }, index) => {
                return (
                  <tr key={id}>
                    <td scope="row">
                      <input
                        type="checkbox"
                        onChange={this.handleCheckItem}
                        ref={this.checkItemRef[index]}
                        value={id}
                      />
                    </td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      {status ? (
                        <button type="button" className="btn btn-success">
                          Kích hoạt
                        </button>
                      ) : (
                        <button type="button" className="btn btn-danger">
                          Chưa kích hoạt
                        </button>
                      )}
                    </td>
                    <td>
                      <a
                        href="#"
                        className="btn btn-warning"
                        onClick={(e) => {
                          e.preventDefault();
                          this.handleShowModal(id);
                        }}
                      >
                        Sửa
                      </a>
                    </td>
                    <td>
                      <a
                        href="#"
                        className="btn btn-danger"
                        onClick={() => {
                          this.handleDeleleUser(id);
                        }}
                      >
                        Xóa
                      </a>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <div className="d-flex justify-content-between">
          <button
            type="button"
            className={`btn btn-danger ${deleteCount == 0 && "disabled"}`}
            onClick={this.handleAnyDelete}
          >
            Xóa đã chọn ({deleteCount})
          </button>
          {this.renderPaginate()}
        </div>
        <Modal show={showModal} onHide={this.handleHideModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              {action === "update" ? "Cập nhật người dùng" : "Thêm người dùng"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmitForm}>
              <div className="mb-3">
                <label>Tên</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  placeholder="Tên..."
                  name="name"
                  onChange={this.handleChangeValue}
                  value={name}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  placeholder="Email..."
                  name="email"
                  onChange={this.handleChangeValue}
                  value={email}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <label>Trạng thái</label>
                <select
                  className="form-select"
                  onChange={this.handleChangeValue}
                  name="status"
                  value={status ? 1 : 0}
                >
                  <option value={0}>Chưa kích hoạt</option>
                  <option value={1}>Kích hoạt</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary me-2">
                Lưu
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={this.handleHideModal}
              >
                Đóng
              </button>
            </form>
          </Modal.Body>
        </Modal>
        <ToastContainer />
      </div>
    );
  }
}

export default Users;

/*
constructor
render
componentDidMount => call api => chờ => setState
render

Quy trình gửi email
- Soạn email
- Chọn danh sách khách hàng
- Đưa danh sách khách hàng vào hàng đợi
- Thiết lập chạy nền trong hàng đợi (Mỗi lần chạy 10 bản ghi => Xóa 10 bản ghi đã chạy)
*/

/*
- Kỹ thuật đặt lính canh
- Kỹ thuật đặt cờ hiệu
- Sắp xếp: nổi bọt, chèn, chọn,...
*/
