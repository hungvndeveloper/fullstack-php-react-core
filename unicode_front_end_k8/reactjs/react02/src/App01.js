import logo from "./logo.svg";
import "./App.css";
import Todos from "./Components/Todos";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showTodos: true,
    };
  }

  render() {
    const { showTodos } = this.state;
    return (
      <>
        <h1>Unicode Academy</h1>
        {showTodos && <Todos />}
        <button
          type="button"
          onClick={() => {
            this.setState({ showTodos: !showTodos });
          }}
        >
          Toggle Component
        </button>
      </>
    );
  }
}

export default App;
