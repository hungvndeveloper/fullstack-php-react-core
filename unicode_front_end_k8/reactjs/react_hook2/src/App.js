import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import StateProvider from "./StateProvider/StateProvider";
import TodoList from "./TodoList/TodoList";
import Search from "./Search/Search";

function App() {
  return (
    <StateProvider>
      <TodoList />
    </StateProvider>
  );
}

export default App;
