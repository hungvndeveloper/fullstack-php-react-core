import React, { Component } from "react";

export class Todos extends Component {
  constructor(props) {
    super(props);
    console.log(`1. constructor`);
    this.state = {
      count: 0,
      todos: [],
      timer: "",
      isLoading: true,
    };
    this.timerInterval = null;
  }

  getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    this.setState({
      todos: data,
      isLoading: false,
    });
  };

  handleTimer = () => {
    this.setState({
      timer: Math.random(),
    });
  };

  componentDidMount() {
    console.log(`3. componentDidMount`);
    this.getTodos();
    //this.timerInterval = setInterval(this.handleTimer, 1000);
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     console.log(prevState, this.state);
  //     console.log(`4. componentDidUpdate`);
  //   }

  componentWillUnmount() {
    console.log(`5. componentWillUnmount`);
    clearInterval(this.timerInterval);
  }

  render() {
    console.log(`2. render`);
    const { count, todos, timer, isLoading } = this.state;
    console.log(todos);
    return (
      <>
        <h2>Todos: {count}</h2>
        <div>
          {isLoading ? (
            <p>Loading....</p>
          ) : (
            todos.map((todo) => <h2 key={todo.id}>{todo.title}</h2>)
          )}
        </div>
        <hr />
        <div>{timer}</div>
        <button
          type="button"
          onClick={() => {
            this.setState({
              count: count + 1,
            });
          }}
        >
          Click me
        </button>
      </>
    );
  }
}

export default Todos;

/*
- componentDidMount => hàm này sẽ được gọi sau khi hàm render được gọi lần đầu tiên (Chỉ gọi 1 lần)
- componentDidUpdate => Hàm này sẽ được gọi sau khi hàm render được gọi từ lần 2 trở đi
+ Có sự thay đổi về State
+ Có sự thay đổi về Props

Lưu ý khi sử dụng component did update 
- Check sự thay đổi của props hoặc state trước khi thực thi 1 hành động gì đó trong hàm này
- Đặc biệt chú ý: Nếu không xảy ra tình trạng vòng lặp vô hạn

Quy trình Call Api trong React JS 

- Viết phương thức (Hàm) call api
- setState cho dữ liệu trả về từ api
- Lựa chọn thời điểm call api 
+ Event Handler
+ componentDidMount => Sau khi hàm render được gọi lần đầu
+ componentDidUpdate => Sau khi hàm render được gọi lần 2 trở đi

Lưu ý: Khi làm việc với api => bắt buộc phải có loading => tăng trải nghiệm
*/
